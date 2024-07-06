import React from 'react'

function Mission({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Mission</div>
  )
}

export default Mission