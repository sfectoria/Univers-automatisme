import React from 'react'

function Services({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Services</div>
  )
}

export default Services