import React, { useState } from "react";
import Seacrchresult from "./Seacrchresult";

const Search = (props)=>{
    const [img,setImg]= useState('');

    const inputdata = (event)=>{
        const data = event.target.value;
        setImg(data);
    }
    return(
        <>
        <div className="search-div">
        <input
          type="text"
          placeholder="Search items" 
          className="search-input"
          value={img}
          onChange={inputdata} 
          />
          {img === ""? null:<Seacrchresult name={img}/>}
        </div>

        </>
       
    )
}
export default Search;