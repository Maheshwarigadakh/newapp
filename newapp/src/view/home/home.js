import React from 'react'
import "./home.css"
import Navbar from "./../../component/navbar/navbar"
import HomeImg from "./House searching-bro.png"


function home() {
  return (
    <div>
        <Navbar/>
        <h1 className="page-title">home</h1>
        <img src={HomeImg} className="header-img"/>
    </div>
  )
}

export default home