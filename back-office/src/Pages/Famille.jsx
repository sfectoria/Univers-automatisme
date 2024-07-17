import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Navbar1 from "../layout/Navbar1";
import DataGridComponent from "../components/DataGrid";

const initialRows = [
  {
    id: 1,
    categorie: "Automatisation",
    nom: "Produit A",
    description: "Systémes automatisés pour l'industrie manufacturière",
    specifications: "Spécifications techniques A",
    prix: 1000,
    disponibilite: "En stock",
    image: "https://via.placeholder.com/150" // URL of the product image
  },
  {
    id: 2,
    categorie: "Hydraulique",
    nom: "Produit B",
    description: "Solutions hydrauliques pour diverses applications industrielles",
    specifications: "Spécifications techniques B",
    prix: 1500,
    disponibilite: "En stock",
    image: "https://via.placeholder.com/150" // URL of the product image
  },
  // ... add more rows as needed
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };


  const columns = [
    { field: "categorie", headerName: "Catégorie", width: 150, editable: true },
    { field: "nom", headerName: "Nom du Produit", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 350,
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img src={params.value} alt="Produit" style={{ width: '100%' }} />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
        
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

    <Navbar1 />  
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30, fontWeight: 300, fontFamily: 'Roboto, sans-serif' }}>Famille de Produits</h3>
       
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
