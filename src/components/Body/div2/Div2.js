import React from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import SendIcon from '@mui/icons-material/Send';
import CellTowerIcon from '@mui/icons-material/CellTower';
import "./Div2.css";

const Div2 = () => {
    return (
        <div className='div2'>
            <h1>Available for everyone</h1>
            <p>Some text for the headings</p>

            <div className='iconContainer'>
                <div className='icons'>

                    <CampaignIcon
                        style={{
                            fontSize: '100px',
                            backgroundColor: "#fff",
                            height: "250px",
                            width: "250px",
                            borderRadius: "50%",
                        }}
                    />

                    <p style={{ color: "#000" }}>Announcement</p>

                    <button
                        style={{
                            backgroundColor: "#644F9C",
                            borderRadius: "30px",
                            width: "250px",
                            height: "60px",
                            color: "#fff"

                        }}
                    >Text 1</button>
                </div>

                <div className='icons'>

                    <SendIcon
                        style={{
                            fontSize: '40px',
                            backgroundColor: "#fff",
                            height: "250px",
                            width: "250px",
                            borderRadius: "120px",
                        }}
                    />

                    <p style={{ color: "#000" }}>Send</p>

                    <button
                        style={{
                            backgroundColor: "#644F9C",
                            borderRadius: "30px",
                            width: "250px",
                            height: "60px",
                            color: "#fff"
                        }}
                    >Text 2</button>
                </div>

                <div className='icons'>

                    <CellTowerIcon
                        style={{
                            fontSize: '40px',
                            backgroundColor: "#fff",
                            height: "250px",
                            width: "250px",
                            borderRadius: "120px",
                        }}
                    />

                    <p style={{ color: "#000" }}>Send</p>

                    <button
                        style={{
                            backgroundColor: "#644F9C",
                            borderRadius: "30px",
                            width: "250px",
                            height: "60px",
                            color: "#fff"
                        }}
                    >Text 3</button>
                </div>


            </div>
        </div>
    )
}

export default Div2