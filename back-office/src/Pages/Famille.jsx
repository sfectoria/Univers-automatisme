import React from 'react'

function Famille({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Famille</div>
  )
}

export default Famille