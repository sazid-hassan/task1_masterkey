import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='myFooter'>
            <div className="dummy_page">
            </div>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1 style={{ fontSize: "20px" }}>We are social</h1>
                        <h2 style={{ fontSize: "16px" }}>Follow Us</h2>
                        <ul style={{ display: "flex" }}>
                            <li><img src={"https://bit.ly/3M4ZAna"} width="32" style={{ width: "32px", margin: "5px" }} alt='ss' /></li>
                            <li><img src={"https://bit.ly/3NHq9jk"} width="32" style={{ width: "32px", margin: "5px" }} alt='ss' /></li>
                            <li><img src={"https://bit.ly/3PRoWYB"} width="32" style={{ width: "32px", margin: "5px" }} alt='ss' /></li>
                        </ul>
                        <h1 style={{ color: "#000", fontWeight: "bolder", fontSize: "36px" }}>Logo</h1>

                    </div>

                    <div className="col">
                        <h1>Links</h1>
                        <ul>
                            <li>ADVERTISERS</li>
                            <li>PUBLISHERS</li>
                            <li>INFLUENCERS</li>
                            <li>AD FORMATS</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Documentations</h1>
                        <ul>
                            <li>TERMS & CONDITIONS</li>
                            <li>PRIVACY POLICY</li>
                            <li>CANCELLATION POLICY</li>
                            <li>BLOG</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>FAQ</li>
                            <li>Media Kit</li>
                            <li>Contact us</li>

                        </ul>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer