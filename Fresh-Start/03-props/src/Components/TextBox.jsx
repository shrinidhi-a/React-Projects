import React from 'react'

function TextBox({myObj}) {
    console.log(myObj.Name);
    console.log(myObj.BU);
  return (
    <>
        <p>{myObj.Name}</p>
        <p>{myObj.BU}</p>
    </>
  )
}

export default TextBox