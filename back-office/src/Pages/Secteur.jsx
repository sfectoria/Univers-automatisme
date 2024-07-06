import React from "react";

function Secteur({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Secteur</div>
  );
}

export default Secteur;
