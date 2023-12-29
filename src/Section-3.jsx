import React from 'react'

function Section3() {
    return (
        <>
            <div className="title font-fmaily" style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "20px" }}>
                <h1>OUR PRODUCTS</h1>
                <p style={{ color: "rgb(133, 133, 133)", fontSize: "18px" }}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. <br></br>Voluptate exercitation incididunt</p>
            </div>

            <div className="list font-fmaily-2">
                <ul style={{ listStyle: "none", display: "flex",justifyContent : "center", margin: "0" ,  paddingBottom: "30px"}}>
                    <li>
                        <a href="#" style={{ color: "rgb(188, 129, 87)", margin : "7px 38px" , fontSize : "18px" , textDecoration : "none" ,fontWeight : "bold"}}>All</a>
                    </li> |
                    <li>
                        <a href="#" style={{color: "rgb(133, 133, 133)", margin : "7px 38px" , fontSize : "18px" , textDecoration : "none" ,fontWeight : "bold"}}>Cupcake</a>    
                    </li> |
                    <li>
                        <a href="#" style={{color: "rgb(133, 133, 133)", margin : "7px 38px" , fontSize : "18px" , textDecoration : "none" ,fontWeight : "bold"}}>Pastry</a>    
                    </li> |
                    <li>
                        <a href="#" style={{color: "rgb(133, 133, 133)", margin : "7px 38px" , fontSize : "18px" , textDecoration : "none" ,fontWeight : "bold"}}>Muffin</a>    
                    </li> |
                    <li>
                        <a href="#" style={{color: "rgb(133, 133, 133)", margin : "7px 38px" , fontSize : "18px" , textDecoration : "none" ,fontWeight : "bold"}}>Waffle</a>
                    </li> |
                    <li>
                        <a href="#" style={{color: "rgb(133, 133, 133)", margin : "7px 38px" , fontSize : "18px" , textDecoration : "none" ,fontWeight : "bold"}}>Tart</a>    
                    </li> 
                </ul>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-8-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Brownie</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$4.99</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-7-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Red Velvet</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$5.00</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-6-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Cream Muffin</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$7.55</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-5-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Macaron Cake</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$9.44</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-4-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>No-bake chocolate</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$4.99</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-3-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Chocolate Bake</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$5.00</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-2-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Red Velvet </a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$7.55</span>
                        </div>
                    </div>
                    <div className="col-md-3 font-fmaily" style={{ textAlign: "center" }}>
                        <div className="card" style={{ textAlign: "center", border: "0.8px solid black", width: " 18rem", margin: "10px 20px" }}>
                            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-1-500x625.jpg" />
                        </div>
                        <div className="card-body" style={{ paddingBottom: "20px", lineHeight: "1.3" }}>
                            <h3 style={{ fontSize: "24px" }}>
                                <a href="#" style={{ color: "black", textDecoration: "none" }}>Italian Loaf</a>
                            </h3>
                            <span style={{ fontSize: "20px", lineHeight: "1.5" }}>$9.44</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>
        </>
    )
}

export default Section3