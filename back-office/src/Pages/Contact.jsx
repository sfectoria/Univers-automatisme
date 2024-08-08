import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DataGridComponent from '../components/DataGrid';

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

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

 

  const columns = [
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
          />
          <DeleteIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div>
           <link rel="preconnect" href="https://fonts.googleapis.com"/>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <div style={{ fontWeight: 10, fontFamily: 'Roboto, sans-serif' }}>Contactez-nous </div>
       
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
