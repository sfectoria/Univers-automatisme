import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Navbar1 from '../layout/Navbar1';
import DataGridComponent from '../components/DataGrid';

const initialRows = [
  {
    id: 1,
    nom: 'Partenaire 1',
    description: 'Description du Partenaire 1',
    contact: 'Contact du Partenaire 1',
  },
  {
    id: 2,
    nom: 'Partenaire 2',
    description: 'Description du Partenaire 2',
    contact: 'Contact du Partenaire 2',
  },
  {
    id: 3,
    nom: 'Partenaire 3',
    description: 'Description du Partenaire 3',
    contact: 'Contact du Partenaire 3',
  },
  {
    id: 4,
    nom: 'Partenaire 4',
    description: 'Description du Partenaire 4',
    contact: 'Contact du Partenaire 4',
  },
  {
    id: 5,
    nom: 'Partenaire 5',
    description: 'Description du Partenaire 5',
    contact: 'Contact du Partenaire 5',
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'nom', headerName: 'Nom du Partenaire', width: 200, editable: true },
    { field: 'description', headerName: 'Description', width: 400, editable: true },
    { field: 'contact', headerName: 'Contact', width: 300, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
      
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
           <link rel="preconnect" href="https://fonts.googleapis.com"/>

    <Navbar1/>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30, fontWeight: 300, fontFamily: 'Roboto, sans-serif' }}>Les Partenaires</h3>
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
