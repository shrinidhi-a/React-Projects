import React from 'react'

function Color({color}) {
  return (
    <div style={{
        backgroundColor: color,
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >My Background color will change</div>
  )
}

export default Color