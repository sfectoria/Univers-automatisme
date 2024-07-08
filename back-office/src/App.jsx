import React from 'react';
import "./App.css";
import Sidebar from "./layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <Sidebar  />
    </div>
  );
}

export default App;
