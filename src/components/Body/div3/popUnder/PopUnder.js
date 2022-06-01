import React from 'react';
import "./PopUnder.css";

import LaunchIcon from '@mui/icons-material/Launch';

const PopUnder = () => {
    return (
        <div className='div3Container'>

            <div className='banner'>
                <h2>
                    Ad Format
                </h2>
                <p style={{
                    color: "#fff",
                    textAlign: "center"
                }}>Explanation graphics of ad format
                    <br />
                    (Image will be changed)
                </p>
            </div>
            <div style={{
                float: "left",
                marginLeft: "10px",
                width: "50%"
            }}>
                <p>This is one of the most popular ads. After user’s click, this
                    ad opens landing page in behind. So, the user experience is
                    not hampered much.


                </p>

                <a href='/#' style={{ color: "#644F9C", fontSize: "24px", position: "absolute" }}>Learn More <LaunchIcon /></a>


            </div>
        </div>

    )
}

export default PopUnder