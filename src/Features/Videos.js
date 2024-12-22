import React, { useState,useEffect } from "react";
// import "./App.css";
import "../App.css";
import "../Cssfile/Video.css";
import axios from "axios";
import { useNavigate,useParams} from "react-router-dom";

function Videos() {
  const {id}= useParams();
  console.log(id);
  const [videosWatched, setVideosWatched] = useState(0);
  const [points, setPoints] = useState(0);

  // const handleWatchVideo = () => {
  //   const newVideosWatched = videosWatched + 1;
  //   const newPoints = newVideosWatched * 5; // 5 points per video watched
  //   setVideosWatched(newVideosWatched);
  //   setPoints(newPoints);
  // };
  const navigate = useNavigate();
  useEffect(() => {
      if(! (localStorage.getItem('userid'))){
          navigate('/')
      };
  }, []);

  const handleVideoClick = async (videoid) => {
    const newVideosWatched = videosWatched + 1;
    const newPoints = newVideosWatched * 5; // 5 points per video watched
    setVideosWatched(newVideosWatched);
    setPoints(newPoints);
    try {
      const req = await axios.post(`http://localhost:5000/users/video/${id}`);
      // console.log(req);
    } catch (error) {
      console.log(error);
      alert("Does not watch the video");
    }
    
    navigate(`/video/${id}/${videoid}`);
    // console.log(id);
  };
  const videoslist = [
    { id: 1, title: 'Video 1', src: 'https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4' },
    { id: 2, title: 'Video 2', src: 'https://videos.pexels.com/video-files/2086113/2086113-hd_1920_1080_30fps.mp4' },
    { id: 3, title: 'Video 3', src: 'https://videos.pexels.com/video-files/1580509/1580509-hd_1920_1080_30fps.mp4' },
    { id: 4, title: 'Video 4', src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4' },
    { id: 5, title: 'Video 5', src: 'https://videos.pexels.com/video-files/4017224/4017224-uhd_2560_1440_30fps.mp4' },
    { id: 6, title: 'Video 6', src: 'https://videos.pexels.com/video-files/854136/854136-hd_1920_1080_25fps.mp4' },
    { id: 7, title: 'Video 7', src: 'https://videos.pexels.com/video-files/3796067/3796067-uhd_2732_1440_25fps.mp4' },
    { id: 8, title: 'Video 8', src: 'https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4' },
    ];
    
  return (
    <>
      <div className="App">
        {/* <div className="video-previews">
          <video
            onClick={() => handleVideoClick(v1)}
            className="videoitem"
            src={v1}
            width="320"
            height="240"
            controls={false}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            Your browser does not support the video tag.
          </video>
          <video
            className="videoitem"
            onClick={() => handleVideoClick(v1)}
            src={v2}
            width="320"
            height="240"
            controls={false}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            Your browser does not support the video tag.
          </video>
          <video
            className="videoitem"
            onClick={() => handleVideoClick(v1)}
            src={v3}
            width="320"
            height="240"
            controls={false}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            Your browser does not support the video tag.
          </video>
          <video
            className="videoitem"
            onClick={() => handleVideoClick(v1)}
            src={v4}
            width="320"
            height="240"
            controls={false}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            Your browser does not support the video tag.
          </video>
        </div> */}
         <h1>Video Watching App</h1>
         <div className="mainbox">
        {videoslist.map((video) => {
          return (
          <div key={video.id} className="videolist">
            <video
            onClick={() => handleVideoClick(video.id)}
            className="videoitem"
            src={video.src}
            width="420"
            height="340"
            controls={false}
            // onMouseOver={(e) => e.target.play()}
            // onMouseOut={(e) => e.target.pause()}
          >
            Your browser does not support the video tag.
          </video>
          </div>
          );}
        )}</div>
        {/* <div className="video-section">
          <h2>Videos</h2>
          <button className="watch-button" onClick={handleWatchVideo}>
            Watch a Video
          </button>
          <p>Click the button above to simulate watching a video.</p>
          <h2>Profile</h2>
          <p>Videos Watched: {videosWatched}</p>
          <p>Points: {points}</p>
        </div> */}
      </div>
    </>
  );
}

export default Videos;
