import React from 'react'

function Avis({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Avis</div>
  )
}

export default Avis