import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const initialRows = [
  {
    id: 1,
    nom: "Nazih Ben Abdallah",
    poste: "Ingénieur Automatisme",
    description: "Expert en systèmes automatisés pour l'industrie manufacturière.",
  },
  {
    id: 2,
    nom: "Hamza Ajlani",
    poste: "Technicienne Hydraulique",
    description: "Spécialiste des solutions hydrauliques pour diverses applications industrielles.",
  },
  {
    id: 3,
    nom: "Badr Hakim",
    poste: "Spécialiste Pneumatique",
    description: "Connaissances approfondies des composants et systèmes pneumatiques.",
  },
  // Ajoutez d'autres membres de l'équipe selon vos besoins
];

export default function TeamDataGrid() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEdit = (row) => {
    const newDescription = prompt(
      "Entrez la nouvelle description :",
      row.description
    );
    if (newDescription) {
      setRows((prevRows) =>
        prevRows.map((r) =>
          r.id === row.id ? { ...r, description: newDescription } : r
        )
      );
    }
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleAdd = () => {
    const newRow = {
      id: rows.length + 1,
      nom: "Nouveau Membre",
      poste: "Nouveau Poste",
      description: "Nouvelle Description",
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nom', headerName: 'Nom', width: 150, editable: true },
    { field: 'poste', headerName: 'Poste', width: 200, editable: true },
    {
      field: 'description',
      headerName: 'Description',
      width: 500,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          <EditIcon
            sx={{ cursor: 'pointer', marginRight: 2 }}
            onClick={() => handleEdit(params.row)}
          />
          <DeleteIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div>
     <nav class="custom-navbar">
        <a href="presentation">Présentation</a>
        <a href="equipe">Equipe</a>
        <a href="mission">Notre Mission</a>
      </nav>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Équipe</h3>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Ajouter
        </Button>
      </Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
}
