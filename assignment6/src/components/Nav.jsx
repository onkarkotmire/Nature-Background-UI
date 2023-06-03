import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <div className='navbox'>
            <div>
                <h1>LOGO</h1>
            </div>
            <div className='navoption'>
                <a href="#" style={{textDecoration: "none", fontSize: "20px", padding:"20px", backgroundColor: "pink", color: "black"}}>HOME</a>
                <a href="#" style={{textDecoration: "none", fontSize: "20px" ,color:"white"}}>ABOUT</a>
                <a href="#" style={{textDecoration: "none", fontSize: "20px" ,color:"white"}}>MENU</a>
                <a href="#" style={{textDecoration: "none", fontSize: "20px" ,color:"white"}}>ORDER</a>
                <a href="#" style={{textDecoration: "none", fontSize: "20px" ,color:"white"}}>CONTACT</a>
            </div>

        </div>
    )
}
