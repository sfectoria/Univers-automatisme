import React from 'react';
import "./App.css";
import Main from "./layout/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
