import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Navbar2 from '../layout/Navbar2';

const initialRows = [
  {
    id: 1,
    element: "Objectifs",
    description: "Définir et atteindre nos objectifs pour l'avenir.",
  },
  {
    id: 2,
    element: "Innovation",
    description: "Promouvoir l'innovation dans tous nos projets.",
  },
  {
    id: 3,
    element: "Impact",
    description: "Avoir un impact positif sur l'industrie et nos partenaires.",
  },
  // Ajoutez d'autres éléments de la mission selon vos besoins
];

export default function MissionDataGrid() {
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
      element: "Nouvel Élément",
      description: "Nouvelle Description",
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'element', headerName: 'Élément', width: 150, editable: true },
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
     <Navbar2 />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Notre Mission</h3>
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
