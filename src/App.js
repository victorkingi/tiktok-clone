import React, {useEffect, useState} from 'react';
import './App.css';
import Video from "./Video";
import {db} from "./firebase";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        db.collection("videos").onSnapshot((snapshot => {
                setVideos(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })));
            }));

    }, [videos]);

    return (
        <div className="app">
          <div className="app_videos">
              {
                  videos.map(({ id, data }) => (
                      <Video
                          key={id}
                          url={data.url}
                          channel={data.channel}
                          description={data.description}
                          song={data.song}
                          likes={data.likes}
                          messages={data.messages}
                          shares={data.shares}
                      />
                  ))
              }
          </div>
        </div>
    );
}

export default App;
