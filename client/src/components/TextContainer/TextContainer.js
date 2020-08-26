import React from 'react';

import { GoPrimitiveDot } from 'react-icons/go';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div>
                        <h5>Trenutno aktivni:</h5>
                        <div className="activeContainer">
                            <h6>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem m-1">
                                        {<GoPrimitiveDot style={{ color: 'lightgreen' }} />}
                                        {name}
                                    </div>
                                ))}
                            </h6>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;