import React from "react";
import "./App.css";
import Main from "./layout/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ user }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <Main user={user} />
    </div>
  );
}

export default App;
