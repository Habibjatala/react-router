import React from "react";
import {NavLink} from "react-router-dom";

const Move = ()=>{
    return(
        <>
            
            <div className="main-style">
            
            <NavLink exact ClassName="active-clss" to="/">
            <h4>About Us</h4>
            </NavLink>
            
            <NavLink  to="/contact">
            <h4>Contact Us</h4>
            </NavLink> 
            <NavLink  to="/search">
            <h4>Search</h4>
            </NavLink>
        
            <NavLink  to="/services/ali/usman">
            <h4>Services</h4>
            </NavLink>
            </div>
        </>
    )
}
export default Move;