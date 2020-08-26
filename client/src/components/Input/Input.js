import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Unesite poruku..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton text-white" onClick={e => sendMessage(e)}><BsArrowRight /></button>
    </form>
)

export default Input;