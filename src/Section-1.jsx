import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Section() {
    return (
        <>
            <div className="title font-fmaily" style={{ textAlign: "center", paddingTop: "100px", paddingBottom: "70px" }}>
                <h1>FOR A SWEET DAY</h1>
                <p style={{ color: "rgb(133, 133, 133)", fontSize: "18px" }}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. <br></br>Voluptate exercitation incididunt</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card" style={{ textAlign: "center", border: "0.6px solid black", width : " 25rem", margin : "0 20px"}}>
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-1.jpg" />
                        <div className="card-body font-fmaily" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                        <h3 style={{ fontSize: "28px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Italian Loaf</a>
                            </h3>
                            <span style={{ fontSize: "24px", lineHeight: "1.5" }}>$4.99</span>
                           
                            <p><img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg" /></p>
                        </div>
                    </div>
                    <div className="card" style={{ textAlign: "center", border: "0.6px solid black", width : " 25rem" ,  margin : "0 20px"}}>
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-2.jpg" />
                        <div className="card-body font-fmaily" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                        <h3 style={{ fontSize: "28px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Croissant Italy Cake</a>
                            </h3>
                            <span style={{ fontSize: "24px", lineHeight: "1.5" }}>$5.00</span>
                           
                            <p><img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg" /></p>
                        </div>
                    </div>
                    <div className="card" style={{ textAlign: "center", border: "0.6px solid black", width : " 25rem",  margin : "0 20px"}}>
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-3.jpg" />
                        <div className="card-body font-fmaily" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                        <h3 style={{ fontSize: "28px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Chocolate Muffin</a>
                            </h3>
                            <span style={{ fontSize: "24px", lineHeight: "1.5" }}>$7.55</span>
                           
                            <p><img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg" /></p>
                        </div>
                    </div>
                </div>
            </div>

         
        </>
    )
}

export default Section