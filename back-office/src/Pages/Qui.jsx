import React from "react";
import { Outlet } from "react-router-dom";

function QuiSommesNous() {
  return (
    <div>
      <h1>Qui sommes nous</h1>
      <Outlet />
    </div>
  );
}

export default QuiSommesNous;
