import React from 'react';
import './divs.css';

const Div1 = () => {
    return (
        <div className='body'>

            <div style={{ marginTop: "100px" }}>
                <div style={{ width: "100%" }}>
                    <div style={{
                        width: "50%",
                        height: "100px",
                        float: "left",
                        marginLeft: "5%"
                    }}>
                        <h1 style={{ color: "#644F9C", marginTop: "20px" }}>Title</h1>
                        <p style={{ fontSize: "24px", marginTop: "60px" }}>Texts for content</p>
                    </div>
                    <div style={{
                        marginLeft: "50%",
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                        <div className='myBox'>
                            <h2>Artwork Title</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Div1