import React from 'react'

const data={
    name:"kalvium",
    location:"LPU",
}

const User = () => {
  return (
    <div>
        <h2>Name: {data.name}</h2>
        <h2>Location: {data.location}</h2>
    </div>
  )
}

export default User