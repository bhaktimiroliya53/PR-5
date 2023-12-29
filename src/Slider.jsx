import React from 'react'

function Slider() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div style={{
                            backgroundImage: `url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-01.jpg")`,
                            backgroundsize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '750px',
                            paddingTop: "100px",
                            paddingBottom: "100px",
                            display: "flex",
                            alignItems: "center"
                        }}>

                            <div className="container">
                                <div className="img" style={{ textAlign: "center" }}>
                                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-01.png" alt="" style={{ width: "95px", paddingBottom: "20px" }} />
                                </div>
                                <h1 className='font-fmaily' style={{ color: "white", textAlign: "center", fontSize: "92px", lineHeight: "1", padding: "200pxx" }}>
                                    Bring The Best <br></br> Experience 
                                </h1>

                                <div className="button font-fmaily-2" style={{ textAlign: "center", marginTop : "50px" }}>
                                    <button type='button'>ORDER NOW</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{
                            backgroundImage: `url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-02.jpg")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '750px',
                            paddingTop: "100px",
                            paddingBottom: "100px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div className="container">
                                <div className="img" style={{ textAlign: "center" }}>
                                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-02.png" alt="" style={{ width: "95px", paddingBottom: "20px" }} />
                                </div>
                                <h1 className='font-fmaily' style={{ color: "white", textAlign: "center", fontSize: "92px", lineHeight: "1", padding: "200pxx" }}>
                                Taste That Lasts <br></br> Forever 
                                </h1>

                                <div className="button font-fmaily-2" style={{ textAlign: "center", marginTop : "50px" }}>
                                    <button type='button'>ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>

        </>
    )
}

export default Slider