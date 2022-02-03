import React from "react";


const Header = () => {

    return(
        <div  style={{height:"100px", width:"100%", backgroundColor: "black", color: "white", display: "flex", justifyContent:"space-around"}}>
        <div style={{width:"300px", margin:"20px", display:"flex", justifyContent:"space-between"}}>
            <a href='#' style={{color:"white" , textDecoration:"none"}}>Home</a>
            <a href='#' style={{color:"white" , textDecoration:"none"}}>About</a>
            <a href='#' style={{color:"white" , textDecoration:"none"}}>Best Deals</a>
            <a href='#' style={{color:"white" , textDecoration:"none" }}>Tools</a>
            <a href='#' style={{color:"white" , textDecoration:"none"}}>Contact</a>
        </div>
        </div>
    )
}


export default Header;