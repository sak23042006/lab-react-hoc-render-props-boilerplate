import React from 'react'
import WithLoader from './WithLoader'

const data = {
    name : "Kalvium",
    Location : "LPU"
}

const User = () => {

  return (
    <div>
        <h2>Name : {data.name}</h2>
        <h2>Location : {data.Location}</h2>
    </div>
  )
}

export default WithLoader(User) // User Component Wrapped With HOC while exporting