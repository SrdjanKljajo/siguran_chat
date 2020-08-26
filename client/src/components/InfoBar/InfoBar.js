import React from 'react';

import { FaWindowClose } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar bg-dark">
        <div className="leftInnerContainer">
            <GoPrimitiveDot style={{ color: 'lightgreen' }} />
            <h5> {room}</h5>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><FaWindowClose style={{ color: 'red' }} /></a>
        </div>
    </div>
);

export default InfoBar;