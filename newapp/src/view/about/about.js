import React from 'react'
import "./about.css"
import Navbar from "./../../component/navbar/navbar"
import AboutImg from "./About me-amico (3).png"


function about() {
  return (
    <div>
        <Navbar/>
        <h1 className="page-title">about</h1>
        <img src={AboutImg} className="header-img"/>
    </div>
  )
}

export default about