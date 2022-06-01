import React from 'react';

import { useState } from 'react';


import PopUnder from "./popUnder/PopUnder";
import "./Div3.css";
import BannerAd from './bannerAd/BannerAd';
import Native from './native/Native';
import Skim from './skim/Skim';

const Div3 = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='div3'>
            <h1 className='div3'>VERSATILE AD FORMATS</h1>

            <div>
                <div className="container">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            Pop-Under
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            Banner Ad
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            Native
                        </button>
                        <button
                            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(4)}
                        >
                            Skim
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2 style={{ color: '#FF6F00' }} >Pop Under</h2>
                            <hr />
                            <PopUnder />
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h2 style={{ color: '#FF6F00' }} >Banner Ad</h2>
                            <hr />
                            <p>
                                <BannerAd />
                            </p>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <h2 style={{ color: '#FF6F00' }} >Native</h2>
                            <hr />
                            <Native />

                        </div>
                        <div
                            className={toggleState === 4 ? "content  active-content" : "content"}
                        >
                            <h2 style={{ color: '#FF6F00' }} >Skims</h2>
                            <hr />
                            <Skim />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Div3