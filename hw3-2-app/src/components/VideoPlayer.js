import React, { useEffect, useRef, useState } from "react";
import Video from '../video/kolo.mov';

function VideoPlayer() {
  const videoRef = useRef();
  const [currentTime, setCurrentTime] = useState (0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playButton = () => {
    const video = videoRef.current;
    video.play();
    setIsPlaying(isPlaying);
  };

  const pauseButton = () => {
    const video = videoRef.current;
    video.pause();
    setIsPlaying(false)
  };
  const upDateTime = () => {
    const video = videoRef.current;
   setCurrentTime(video.currentTime)
  };

  useEffect( () => {
    const video = videoRef.current;
    video.addEventListener("timeupdate",upDateTime);
    return () => {
      video.removeEventListener("timeupdate", upDateTime);
    };
  }, []);

  const timerItem = () => {
  const hours = Math.floor(currentTime / 3600);
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="videopalyer">
      <h3>Task 3.2 Videoplayer</h3>
      <div>
      <video className="video" ref={videoRef} controls width="450">
         <source src={Video} type = "video/mp4"></source>
      </video>
      </div>
      <div className="video-btns">
        <button className="button" onClick={playButton}>Play</button>
        <button className="button" onClick={pauseButton}>Pause</button>
      </div>
      <p className="timer">{timerItem()}</p>
    </div>
    
  )
}
export default VideoPlayer

// import ТвояНазваВідео from "./путь/до/відео"

// ... src={ТвояНазваВідео} ...

// class VideoPlayer extends Component{

//   render(){

//   return (
//     <video controls width="450">
//       <source src={KoloPlay}></source>
//     </video>
//   )
// }
// }

 