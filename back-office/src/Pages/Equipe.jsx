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


  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

 

  const columns = [
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

   <Navbar2 />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <div style={{ fontWeight: 10, fontFamily: 'Roboto, sans-serif' }}>Équipe</div>
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
