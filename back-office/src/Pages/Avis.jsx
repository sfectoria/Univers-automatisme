import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Navbar1 from "../layout/Navbar1";
import DataGridComponent from "../components/DataGrid";

const initialRows = [
  {
    id: 1,
    nomClient: "Client 1",
    note: 4,
    commentaire: "Très bon service",
    date: "2024-07-14",
  },
  {
    id: 2,
    nomClient: "Client 2",
    note: 5,
    commentaire: "Excellent produit",
    date: "2024-07-13",
  },
  {
    id: 3,
    nomClient: "Client 3",
    note: 3,
    commentaire: "Service à améliorer",
    date: "2024-07-12",
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };



  const columns = [
    {
      field: "nomClient",
      headerName: "Nom du client",
      width: 150,
      editable: true,
    },
    { field: "note", headerName: "Note", width: 120, editable: true },
    {
      field: "commentaire",
      headerName: "Commentaire",
      width: 300,
      editable: true,
    },
    { field: "date", headerName: "Date", width: 150, editable: true },
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <Navbar1 />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <div style={{ fontWeight: 300, fontFamily: 'Roboto, sans-serif' }}>Avis des clients</div>
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
