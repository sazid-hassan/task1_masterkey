import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';


const Skim = () => {
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
                <p>
                    SKIM" is a link that a publisher inserts on a specific site
                    element, and after clicking on it, an advertisement appears
                    to the user.
                    SKIM gives 100% control of your sold traffic amount, higher
                    CR to advertisers and CPM rates to publishers.
                </p>

                <a href='/#' style={{ color: "#644F9C", fontSize: "24px", position: "absolute" }}>Learn More <LaunchIcon /></a>

            </div>
        </div>
    )
}

export default Skim