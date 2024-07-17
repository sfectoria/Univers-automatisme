import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar1 from "../layout/Navbar1";
import DataGridComponent from "../components/DataGrid";
import EditIcon from "@mui/icons-material/Edit";

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

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };


  const columns = [
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

    <Navbar1/>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <div style={{  fontWeight: 10, fontFamily: 'Roboto, sans-serif' }}>Secteur d'activité</div>
      </Box>

      <DataGridComponent rows={rows} columns={columns} />
    </div>
  );
}
