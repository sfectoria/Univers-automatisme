import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar1 from '../layout/Navbar1';
import DataGridComponent from '../components/DataGrid';
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { fetchServices } from '../store/servicesSlice';


export default function DataGridDemo() {
const [array,setArray]=React.useState([])

  // const [rows, setRows] = React.useState();

  // useEffect(() => {
  //   axios.get(`http://localhost:4000/sections/${3}`)
  //     .then(response => {
  //       console.log("res",response);
  //       const contentsArray = response.data.contents.map((content, index) => ({
  //         id: content.id,
  //         typeService: content.title,
  //         description: content.paragraph,
  //       }));
  //       setRows(contentsArray);
  //       console.log("array", contentsArray);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);

  const dispatch = useDispatch();
  const rows = useSelector((state) => state.services.services);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
console.log("rows",rows);
  const handleDelete = (id) => {
    // setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'typeService', headerName: 'Title', width: 200, editable: true },
    { field: 'description', headerName: 'Paragraph', width: 500, editable: true },
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
