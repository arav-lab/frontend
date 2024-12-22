// import React, { useState } from "react";
// const Video = ({ videoSrc, user, updateUserPoints, updateUserDownloads }) => {


//   const [watchedVideos, setWatchedVideos] = useState(0);
//   const [downloadedToday, setDownloadedToday] = useState(false);
//   const videoslist = [
//     { id: 1, title: 'Video 1', src: 'https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4' },
//     { id: 2, title: 'Video 2', src: 'https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4' },
//     { id: 3, title: 'Video 3', src: 'https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4' },
//   ];

//   const handleVideoClick = () => {
//     setWatchedVideos(watchedVideos + 1);
//     const newPoints = (watchedVideos + 1) * 5;
//     // updateUserPoints(user.id, newPoints);
//   };

//   const handleDownloadClick = () => {
//     if (downloadedToday) {
//       alert(
//         "You have already downloaded a video today. Upgrade to premium for more downloads."
//       );
//       return;
//     }
//     // Simulate video download
//     const link = document.createElement("a");
//     link.href = videoSrc;
//     link.download = "video.mp4";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     updateUserDownloads(user.id, videoSrc);
//     setDownloadedToday(true);
//   };

//   return (
//     <div>
//       <video width="600" controls onClick={handleVideoClick}>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <button onClick={handleDownloadClick}>Download Video</button>
//       {downloadedToday && <p>You have downloaded your video for today.</p>}
//       <button onClick={() => alert("Upgrade to premium for more downloads.")}>
//         Go Premium
//       </button>
//     </div>
//   );
// };

// export default Video;




import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "../Cssfile/Video.css";

const videoslist = [
    { id: 1, title: 'Video 1', src: 'https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4' },
    { id: 2, title: 'Video 2', src: 'https://videos.pexels.com/video-files/2086113/2086113-hd_1920_1080_30fps.mp4' },
    { id: 3, title: 'Video 3', src: 'https://videos.pexels.com/video-files/1580509/1580509-hd_1920_1080_30fps.mp4' },
    { id: 4, title: 'Video 4', src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4' },
    { id: 5, title: 'Video 5', src: 'https://videos.pexels.com/video-files/4017224/4017224-uhd_2560_1440_30fps.mp4' },
    { id: 6, title: 'Video 6', src: 'https://videos.pexels.com/video-files/854136/854136-hd_1920_1080_25fps.mp4' },
    { id: 7, title: 'Video 7', src: 'https://videos.pexels.com/video-files/3796067/3796067-uhd_2732_1440_25fps.mp4' },
  ];

const Video = () => {
  const { videoid } = useParams();
  const navigate = useNavigate();
useEffect(() => {
    if(! (localStorage.getItem('userid'))){
        navigate('/')
    };
}, []);
  
  const video = videoslist.find((v) => v.id === parseInt(videoid));

  if (!video) {
    return <h2>Video not found</h2>;
  }

  return (
    <div className='videosbox'>
    <div className='videoinnerbox'>
      <h1>{video.title}</h1>
      <video controls width="750">
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <Link to="/home">Back to Video List</Link>
      </div>
    </div>
    </div>
  );
};

export default Video;
