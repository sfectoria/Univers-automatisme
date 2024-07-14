import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const initialRows = [
  {
    id: 1,
    methode: "Email",
    detail: "contact@exemple.com",
  },
  {
    id: 2,
    methode: "Téléphone",
    detail: "+33 123 456 789",
  },
  {
    id: 3,
    methode: "Adresse",
    detail: "123 Rue de l'Exemple, 75000 Tunis",
  },
];

export default function ContactezNous() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEdit = (row) => {
    const newDetail = prompt(
      "Entrez le nouveau détail :",
      row.detail
    );
    if (newDetail) {
      setRows((prevRows) =>
        prevRows.map((r) =>
          r.id === row.id ? { ...r, detail: newDetail } : r
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
      methode: "Nouvelle Méthode",
      detail: "Nouveau Détail",
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'methode', headerName: 'Méthode', width: 150, editable: true },
    {
      field: 'detail',
      headerName: 'Détail',
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Contactez-nous</h3>
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
