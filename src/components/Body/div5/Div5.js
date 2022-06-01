import React from 'react';
import "./Div5.css";

import Cards from "./card/Cards";

const Div5 = () => {
    return (
        <div className='div5'>

            <h1>Title</h1>

            <div style={{ display: "flex", marginLeft: "15%" }}>
                <Cards title={"Title 1"} />
                <Cards title={"Title 2"} />
            </div>
        </div>

    )
}

export default Div5