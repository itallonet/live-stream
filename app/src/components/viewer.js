import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const ViewerCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        socket.on('viewer count', (newCount) => {
            setCount(newCount);
        });

        return () => {
            socket.off('viewer count');
        };
    }, []);

    return <div id="viewers">Viewers: {count}</div>;
};

export default ViewerCount;
