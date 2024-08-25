import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import "./contact.css"
import ContactImg from "./Contact us-bro (1).png"

function contact() {
  return (
    <div>
        <Navbar/>
        <h1 className="page-title">Contact</h1>
        <img src= {ContactImg} className="header-img"></img>
    </div>
  )
}

export default contact