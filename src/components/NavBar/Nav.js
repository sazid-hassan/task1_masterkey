import React from 'react';
import "./Nav.css";

import "./navToggle.css"

const Nav = () => {
    return (
        <div>
            <nav>

                <div className='topBar'>
                    <label className="logo">LOGO</label>
                    <label className="lang">
                        <ul>
                            <li className='active'>Bn</li> /
                            <li>EN</li>
                        </ul>
                    </label>
                </div>

                <menu>
                    <ul>

                        <li><a className="active" href="/#">Home</a></li>
                        <li><a href="/#">Advertises</a></li>
                        <li><a href="/#">Publishers</a></li>
                        <li><a href="/#">Influencers</a></li>
                        <li><a href="/#">Ad Formats</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contact Us</a></li>


                        <li className='sign' style={{
                            float: 'right', marginLeft: "300px"

                        }}>


                            <button className='active'>Log In</button>
                            <button>Sign Up</button>


                        </li>
                    </ul>
                </menu>
            </nav>
        </div>
    )
}

export default Nav
