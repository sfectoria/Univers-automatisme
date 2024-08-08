import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar1 from '../layout/Navbar1';
import DataGridComponent from '../components/DataGrid';
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from 'react';
import axios from 'axios';

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
 
];

export default function DataGridDemo() {
const [array,setArray]=React.useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:4000/pages/accueil")
  //     .then(response => {
  //       setServices(response.data.sections);
  //       console.log("object",response.data.sections);
  //       console.log("ser",services)
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/sections/Services")
  //     .then(response => {
  //       const contentsArray = response.data[0].contents;
  //       console.log("contents", contentsArray);  
  //       setArray(response.data[0].contents)  ;
  //       console.log("array",array)   ;
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);

  const [rows, setRows] = React.useState(initialRows);

  useEffect(() => {
    axios.get("http://localhost:4000/sections/Services")
      .then(response => {
        const contentsArray = response.data[0].contents.map((content, index) => ({
          id: content.id,
          typeService: content.name,
          description: content.value,
        }));
        setRows(contentsArray);
        console.log("array", contentsArray);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);


  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
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
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <div style={{ fontWeight: 10, fontFamily: 'Roboto, sans-serif' }}>Services</div>
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
