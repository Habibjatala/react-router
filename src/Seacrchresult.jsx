import React from "react";
const Seacrchresult =(props)=>{
    const img=`https://source.unsplash.com/500x400/?${props.name}`;
    return(
        <>
        <div>
            <img src={img} alt="pic is missing"/>
           
        </div>

        </>
    )
}
export default Seacrchresult;