import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer bg-dark">
            <div className="col-lg-3 col-md-6 col-sm-9">
                <h4 className="heading">Prijava</h4>
                <div>
                    <input placeholder="Odaberite ime" className="joinInput" type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Prolaz" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='btn text-white button mt-20' type="submit">Pristup čatu</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
