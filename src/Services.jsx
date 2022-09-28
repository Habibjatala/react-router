import React from "react";
import { useLocation, useNavigate, useParams, } from "react-router-dom";

const Services = (props)=>{
    const {asd,aho}= useParams();
    const location = useLocation();
    const name = useNavigate();
    console.log(name);
    return(
        <>
        <h1> Heloow This is the {props.name} page {asd} and {aho} </h1>
        <p> My current location is {location.pathname} </p>
        {location.pathname === `/services/ali/usman` ? <button onClick={()=>{name(-2)
            
        }}>Heloow</button> :null}
        
        </>
        
    )
}
export default Services;