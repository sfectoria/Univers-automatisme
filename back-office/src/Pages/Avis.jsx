import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Navbar1 from '../layout/Navbar1';

const initialRows = [
  {
    id: 1,
    nomClient: 'Client 1',
    note: 4,
    commentaire: 'Très bon service',
    date: '2024-07-14',
  },
  {
    id: 2,
    nomClient: 'Client 2',
    note: 5,
    commentaire: 'Excellent produit',
    date: '2024-07-13',
  },
  {
    id: 3,
    nomClient: 'Client 3',
    note: 3,
    commentaire: 'Service à améliorer',
    date: '2024-07-12',
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEdit = (updatedRow) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === updatedRow.id ? { ...row, ...updatedRow } : row
      )
    );
  };
  

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleAdd = () => {
    const newRow = {
      id: rows.length + 1,
      nomClient: 'Nouveau Client',
      note: 0,
      commentaire: 'Nouveau commentaire',
      date: new Date().toISOString().split('T')[0],
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nomClient', headerName: 'Nom du client', width: 150, editable: true },
    { field: 'note', headerName: 'Note', width: 120, editable: true },
    { field: 'commentaire', headerName: 'Commentaire', width: 300, editable: true },
    { field: 'date', headerName: 'Date', width: 150, editable: true },
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
   <Navbar1 />
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Avis des clients</h3>
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
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
