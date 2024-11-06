import React from "react"

import hotel_logo from "../assets/image_5.png"
import logo from "../assets/tapcartelogo.png"
import "./Navbar.css"

export const Navbar = () => {
    return <div className="navbar">
        <img src={logo} alt="logo" className="tap_logo"/>
        <img src={hotel_logo} alt="hotel_logo" className="hotel_logo"/>
    </div>
}
