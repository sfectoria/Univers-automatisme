import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar1 from "../layout/Navbar1";
const initialRows = [
  {
    id: 1,
    titre: "Automatisation",
    description: "Systémes automatisés pour l industrie manufacturière",
    image: "",
  },
  {
    id: 2,
    titre: "Hydraulique",
    description:
      "Solutions hydrauliques pour diverses applications industrielles",
    image: "",
  },
  {
    id: 3,
    titre: "Pneumatique",
    description: "Composants et systémes pneumatiques",
    image: "",
  },
  {
    id: 4,
    titre: "Secteur 4",
    description: "Systéme automatisés pour l industrie manufacturière",
    image: "",
  },
  {
    id: 5,
    titre: "Secteur 5",
    description: "Systéme automatisés pour l industrie manufacturière",
    image: "",
  },
  {
    id: 6,
    titre: "Secteur 6",
    description: "Systéme automatisés pour l industrie manufacturière",
    image: "",
  },
  {
    id: 7,
    titre: "Secteur 7",
    description: "Systéme automatisés pour l industrie manufacturière",
    image: "",
  },
  {
    id: 8,
    titre: "Secteur 8",
    description: "Systéme automatisés pour l industrie manufacturière",
    image: "",
  },
  {
    id: 9,
    titre: "Secteur 9",
    description: "Systéme automatisés pour l industrie manufacturière",
    image: "",
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEdit = (row) => {
    const newDescription = prompt(
      "Entrez la nouvelle description:",
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
      titre: "Nouveau Titre",
      description: "Nouvelle Description",
      image: "",
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "titre", headerName: "Titre", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
      type: "number",
      width: 200,
      editable: true,
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
    <Navbar1/>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <h3 style={{ marginLeft: 30 }}>Secteur d'activité</h3>
        <Button
          sx={{ marginRight: 21 }}
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Ajouter
        </Button>
      </Box>
      <Box sx={{ height: 450, width: "100%" }}>
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
