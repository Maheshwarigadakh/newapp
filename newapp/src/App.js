import React from 'react'
import smileImg  from "./smile.jpg"
function app() {
  return (
    <div>
      <h1> Hello Users</h1>
      <img src="https://bradaronson.com/wp-content/uploads/2013/10/happy.jpg" alt='random' height="400px" width="400px"></img>
      <img src={smileImg} height="500px" width="300px" alt="rand"></img>
    </div>
  )
}

export default app