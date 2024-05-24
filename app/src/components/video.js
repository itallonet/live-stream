import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ streamUrl }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(videoRef.current);
        }
    }, [streamUrl]);

    return <video id="player" ref={videoRef} controls autoPlay />;
};

export default VideoPlayer;
