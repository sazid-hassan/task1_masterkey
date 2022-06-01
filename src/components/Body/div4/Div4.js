import React from 'react';
import "./Div4.css";

const Div4 = () => {
    return (
        <div className='div4'>
            <h1 style={{ textAlign: "center", width: "100%" }}>Title 1</h1>

            <div className='circleContainer'>
                <div className='circle1' style={{ width: "33%" }}>
                    <h1 style={{ textAlign: "center", marginTop: "30%", fontSize: "100px" }}>1 BN+</h1>
                    <p style={{ textAlign: "center", fontSize: "30px" }}>Daily Impressions</p>
                </div>
                <div className='circle2' style={{ width: "33%" }}>

                    <h1 style={{ textAlign: "center", marginTop: "30%", fontSize: "100px" }}>$500K+</h1>
                    <p style={{ textAlign: "center", fontSize: "30px" }}>Paid</p>
                </div>
                <div className='circle3' style={{ width: "33%" }}>
                    <h1 style={{ textAlign: "center", marginTop: "30%", fontSize: "100px" }}>8K+</h1>
                    <p style={{ textAlign: "center", fontSize: "30px" }}>Global Publishers</p>
                </div>
            </div>
        </div>
    )
}

export default Div4