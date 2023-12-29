import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow : "0 0 15px rgba(0, 0, 0, 0.15)"}}>
                <div className="container" style={{ display: "unset" }}>
                    <div className="row d-flex align-items-center" >
                        <div className="col-md-3">
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg" />
                        </div>
                        <div className="col-md-7 font-fmaily-2">
                            <ul style={{ listStyle: "none", display: "flex", margin: "0" }}>
                                <li style={{ padding: "25px" }}>
                                    <a href="#" style={{ display: "flex", alignItems: "center", color: "rgb(188, 129, 87)", fontWeight: "bold" }}>Home<IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "25px" }}>
                                    <a href="#" style={{ display: "flex", alignItems: "center", color: "rgb(133, 133, 133)", fontWeight: "bold", textDecoration : "none"}}>Shop<IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "25px" }}>
                                    <a href="#" style={{ display: "flex", alignItems: "center", color: "rgb(133, 133, 133)", fontWeight: "bold", textDecoration : "none" }}>Pages<IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "25px" }}>
                                    <a href="#" style={{ display: "flex", alignItems: "center", color: "rgb(133, 133, 133)", fontWeight: "bold", textDecoration : "none" }}>Blog<IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "25px" }}>
                                    <a href="#" style={{ display: "flex", alignItems: "center", color: "rgb(133, 133, 133)", fontWeight: "bold", textDecoration : "none" }}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul style={{ listStyle: "none", display: "flex", margin: "0" }}>
                                <li style={{ padding: "15px", fontSize: "20px" }}>
                                    <IoSearch />
                                </li>
                                <li style={{ padding: "15px", fontSize: "20px" }}>
                                    <GrCart />
                                </li>
                                <li style={{ padding: "15px", fontSize: "20px" }}>
                                    <FaRegUser />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header