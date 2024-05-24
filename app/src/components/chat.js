import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        socket.on('chat message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('chat message');
        };
    }, []);

    const sendMessage = () => {
        socket.emit('chat message', newMessage);
        setNewMessage('');
    };

    return (
        <div style={{ width: '100%' }}>
            <div id="chat-messages">
                {messages.map((msg, idx) => (
                    <div className="item" key={idx}>{msg}</div>
                ))}
            </div>
            <div id='input-box'>
                <input
                    placeholder='Digite uma mensagem'
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
