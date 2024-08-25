import React from 'react'
import "./home.css"
import Navbar from "./../../component/navbar/navbar"
import Foot from "../../component/foot/footer"
import HomeImg from "./House searching-bro.png"
import toast, { Toaster } from "react-hot-toast"

function home() {
  return (
    <div>
        <Navbar/>
        <h1 className="page-title">Home</h1>
        <img src={HomeImg} className="header-img"/>

        <button type="button" className="btn" onClick={()=>{
          toast.success("Hello From Mahi")
        }}>
          Show Toast
        </button>
        
        <button type="button" className="btn" onClick={()=>{
          toast.dismiss()
          toast.success("Loading Completed")
        }}>
          Finish 
        </button>
        
        <Foot/>
      <Toaster/>
    </div>
  )
}

export default home