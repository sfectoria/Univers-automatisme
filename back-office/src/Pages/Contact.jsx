import React from 'react'

function Contact({ open }) {
  return (
    <div style={{ paddingLeft: open ? 0 : 300, paddingTop: 100 }}>Contact</div>
  )
}

export default Contact