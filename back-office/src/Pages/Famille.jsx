import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

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

  const handleEdit = (row) => {
    const newDescription = prompt("Entrez la nouvelle description:", row.description);
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
      categorie: "Nouvelle Catégorie",
      nom: "Nouveau Produit",
      description: "Nouvelle Description",
      specifications: "Nouvelles Spécifications",
      prix: 0,
      disponibilite: "Disponibilité",
      image: "https://via.placeholder.com/150" // Default URL for new product image
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "categorie", headerName: "Catégorie", width: 150, editable: true },
    { field: "nom", headerName: "Nom du Produit", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 350,
      editable: true,
    },
    {
      field: "specifications",
      headerName: "Spécifications Techniques",
      width: 200,
      editable: true,
    },
    { field: "prix", headerName: "Prix", width: 100, editable: true, type: "number" },
    {
      field: "disponibilite",
      headerName: "Disponibilité",
      width: 150,
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
          <EditIcon
            sx={{ cursor: "pointer", marginRight: 2 }}
            onClick={() => handleEdit(params.row)}
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
      <nav class="custom-navbar">
        <a href="/">Secteur d'activité</a>
        <a href="/famille">Famille de Produits</a>
        <a href="partenaires">Les Partenaires</a>
        <a href="services">Services</a>
        <a href="avis">Avis des clients</a>
      </nav>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Famille de Produits</h3>
        <Button
          sx={{ marginRight: 21 }}
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Ajouter
        </Button>
      </Box>
      <Box sx={{ height: 400, width: "100%" }}>
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
