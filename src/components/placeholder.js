import React from 'react'

function Placeholder() {
  return (
    <img
      src={`${process.env.PUBLIC_URL + '/placeholder.jpg'}`}
      alt="Styling takes time"
      width="220px"
    />
  )
}

export default Placeholder