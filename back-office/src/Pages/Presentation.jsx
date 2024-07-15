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
    element: 'Valeur fondamentale',
    description: 'Vision stratégique de l\'entreprise',
  },
  {
    id: 2,
    element: 'Mission',
    description: 'But et raison d\'être de l\'entreprise',
  },
  {
    id: 3,
    element: 'Histoire',
    description: 'Historique et évolution de l\'entreprise',
  },
  // Ajoutez d'autres lignes selon vos besoins
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEdit = (row) => {
    const newDescription = prompt(
      'Entrez la nouvelle description :',
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
      element: 'Nouvel élément',
      description: 'Nouvelle description',
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'element', headerName: 'Élément', width: 200, editable: true },
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
   <Navbar2/>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Présentation</h3>
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
