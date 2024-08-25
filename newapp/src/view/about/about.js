import React from 'react'
import "./about.css"
import Navbar from "./../../component/navbar/navbar"
import Foot from "../../component/foot/footer"
import AboutImg from "./About me-amico (3).png"


function about() {
  return (
    <div>
        <Navbar/>
        <h1 className="page-title">about</h1>
        <img src={AboutImg} className="header-img"/>
        <Foot/>
    </div>
  )
}

export default about