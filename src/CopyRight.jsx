import React from 'react'
import { FaHeart } from "react-icons/fa";

function CopyRight() {
    return (
        <>

            <div className="copy" style={{ backgroundColor : "#F4F4F4", padding : "15px"}}>
                <p style={{fontSize : "14px", textAlign : "center", margin : "0"}}>© 2022  <strong>Bakerfresh</strong>  Made with <FaHeart style={{color : "rgb(188, 129, 87)", fontSize : "14px"}}/> by <a href='#' style={{color : "black"}}>BootXperts</a></p>
            </div>
        </>
    )
}

export default CopyRight