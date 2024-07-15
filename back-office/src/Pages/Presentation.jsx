import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Navbar2 from "../layout/Navbar2";
import DataGridComponent from "../components/DataGrid";

const initialRows = [
  {
    id: 1,
    element: "Valeur fondamentale",
    description: "Vision stratégique de l'entreprise",
  },
  {
    id: 2,
    element: "Mission",
    description: "But et raison d'être de l'entreprise",
  },
  {
    id: 3,
    element: "Histoire",
    description: "Historique et évolution de l'entreprise",
  },
  // Ajoutez d'autres lignes selon vos besoins
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "element", headerName: "Élément", width: 200, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      editable: true,
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <Navbar2 />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <h3
          style={{
            marginLeft: 30,
            fontWeight: 300,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Présentation
        </h3>
      </Box>
      <DataGridComponent rows={rows} columns={columns} />
    </div>
  );
}
