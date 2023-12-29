import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer style={{ margin: "80px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img" style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg" />
                            </div>
                            <div className="logo">
                                <ul style={{ listStyle: "none", display: "flex", margin: "0", padding: "0" }}>
                                    <li>
                                        <a href="#" style={{ color: "black", margin: "20px 10px", marginLeft: "0", fontSize: "20px" }}><FaFacebookF /></a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ color: "black", margin: "20px 10px", fontSize: "20px" }}><FaTwitter /></a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ color: "black", margin: "20px 10px", fontSize: "20px" }}><FaPinterestP /></a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ color: "black", margin: "20px 10px", fontSize: "20px" }}><FaInstagram /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5 className='font-fmaily' style={{ marginBottom: "15px" }}>CATEGORIES</h5>
                            <ul className='font-fmaily-2' style={{ listStyle: "none", textAlign: "center", margin: "0", padding: "0" }}>
                                <li style={{ color: "black"}}>
                                    <a href="" style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Cupcake</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href="" style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Pastry</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href=""style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Muffin</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href=""style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Waffle</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className='font-fmaily' style={{ marginBottom: "15px" }}>SERVICES</h5>
                            <ul className='font-fmaily-2' style={{ listStyle: "none", textAlign: "center", margin: "0", padding: "0" }}>
                                <li style={{ color: "black"}}>
                                    <a href="" style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Delivery</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href="" style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Payment</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href=""style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Returns</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href=""style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 className='font-fmaily' style={{ marginBottom: "15px" }}>INFORMATION</h5>
                            <ul className='font-fmaily-2' style={{ listStyle: "none", textAlign: "center", margin: "0", padding: "0" }}>
                                <li style={{ color: "black"}}>
                                    <a href="" style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>About Us</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href="" style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Contact Us</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href=""style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Latest Post</a>
                                </li>
                                <li style={{ color: "black"}}>
                                    <a href=""style={{ display:"flex",color: "rgb(133, 133, 133)", textDecoration : "none", fontSize : "16px",lineHeight : '2'}}>Selling Tips</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer