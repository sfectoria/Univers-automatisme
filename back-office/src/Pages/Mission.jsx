import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Navbar2 from '../layout/Navbar2';
import DataGridComponent from '../components/DataGrid';

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

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
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

      <Navbar2 />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30, fontWeight: 300, fontFamily: 'Roboto, sans-serif' }}>Notre Mission</h3>
       
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
