import React, {useEffect, useRef, useState} from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import {useInView} from "react-intersection-observer";

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const onVideoPress = (e) => {
        e.preventDefault();
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    useEffect(() => {
        if (inView) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }

    }, [inView]);

    return (
        <div className="video" ref={ref}>
            <video
                className="video_player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            />
                <VideoFooter
                    channel={channel}
                    description={description}
                    song={song}
                />
                <VideoSidebar
                    likes={likes}
                    messages={messages}
                    shares={shares}
                />
        </div>
    )
}

export default Video;