import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';


const Native = () => {
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
                <p>Ad format with the image and the title, that perfectly fits into
                    the content of the site.
                    Native ads are placed in the most visible areas of the page
                    and, thus, this format shows good results and the level of
                    interaction.
                </p>

                <a href='/#' style={{ color: "#644F9C", fontSize: "24px", position: "absolute" }}>Learn More <LaunchIcon /></a>

            </div>
        </div>
    )
}

export default Native