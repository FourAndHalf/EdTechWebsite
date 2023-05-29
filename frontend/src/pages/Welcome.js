import React from 'react'
import { useLocation } from 'react-router-dom'

function Welcome() {
    const location = useLocation
  return (
    <div>
      <h1> Hii {location.state.id}, Welcome to Eduzell</h1>
    </div>
  )
}

export default Welcome
