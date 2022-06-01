import React from 'react';

import LaunchIcon from '@mui/icons-material/Launch';

const BannerAd = () => {
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
                <p>Choose between the available banner formats. Highly
                    effective ad for visibility.
                </p>

                <a href='/#' style={{ color: "#644F9C", fontSize: "24px", position: "absolute" }}>Learn More <LaunchIcon /></a>

            </div>
        </div>
    )
}

export default BannerAd