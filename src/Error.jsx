import React from "react";
import {NavLink} from 'react-router-dom';

const Error = ()=>{
    return(
        <>
            <div className="main-div">
            <h1> 404 Error </h1>
            <br/>
            <h1> OOPS! The page is not found </h1>
            <NavLink to="/">Go Back</NavLink>

            </div>
        </>
        
    )
}
export default Error;