import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import "./contact.css"
import ContactImg from "./Contact us-bro (1).png"
import Foot from "../../component/foot/footer"


function contact() {
  return (
    <div>
        <Navbar/>
        <h1 className="page-title">Contact</h1>
        <img src= {ContactImg} className="header-img"></img>
        <Foot/>
    </div>
  )
}

export default contact