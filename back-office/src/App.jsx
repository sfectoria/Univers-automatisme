import React from 'react';
import { Outlet } from "react-router-dom";
import "./App.css";
import DrawerLeft from "./layout/Drawer";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './layout/Sidebar';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <DrawerLeft /> */}
      <Sidebar  />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
