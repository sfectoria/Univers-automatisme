import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Navbar1 from '../layout/Navbar1';

const initialRows = [
  {
    id: 1,
    typeService: 'Automatisation',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 2,
    typeService: 'Hydraulique',
    description: 'Solutions hydrauliques pour diverses applications industrielles',
  },
  {
    id: 3,
    typeService: 'Pneumatique',
    description: 'Composants et systèmes pneumatiques',
  },
  {
    id: 4,
    typeService: 'Secteur 4',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 5,
    typeService: 'Secteur 5',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 6,
    typeService: 'Secteur 6',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 7,
    typeService: 'Secteur 7',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 8,
    typeService: 'Secteur 8',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 9,
    typeService: 'Secteur 9',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEdit = (row) => {
    const newDescription = prompt('Entrez la nouvelle description :', row.description);
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
      typeService: 'Nouveau Type de Service',
      description: 'Nouvelle Description',
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'typeService', headerName: 'Type de Service', width: 200, editable: true },
    { field: 'description', headerName: 'Description', width: 500, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          <EditIcon
            sx={{ cursor: 'pointer', marginRight: 2 }}
            onClick={() => handleEdit(params.row)}
          />
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
   <Navbar1/>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30 }}>Services</h3>
        <Button
          sx={{ marginRight: 21 }}
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Ajouter
        </Button>
      </Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
         rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
