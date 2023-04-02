import React from "react";
import './profileElement.css';


const Profileelement = ({crown,text1,text2,top,left,size}) => {
    return(
        <div className="profileElement" style={{top:top,left:left}}>
            <img style={{width:size}} src={crown} alt="" />
            <span>
                {text1} {text2}
            </span>
        </div>
    )
}

export default Profileelement;