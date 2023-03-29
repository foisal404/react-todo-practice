import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {
    const [power,setPower]=useState(100);
    let powerDown=()=>setPower(power<=0?power:power-10);
    return (
        <div className='battery'>
            <h2>battery persent {power}</h2>
            <button onClick={powerDown}>battery down</button>
        </div>
    );
};

export default Mobile;