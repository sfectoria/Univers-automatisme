import React from 'react'

function Partenaires({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Partenaires</div>
  )
}

export default Partenaires