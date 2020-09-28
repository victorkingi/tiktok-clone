import React from "react";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import "./VideoFooter.css";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {() => (
                            <p>{song}</p>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="disc" />
        </div>
    )
}

export default VideoFooter;