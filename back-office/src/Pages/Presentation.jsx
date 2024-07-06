import React from 'react'

function Presentation({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Presentation</div>
  )
}

export default Presentation