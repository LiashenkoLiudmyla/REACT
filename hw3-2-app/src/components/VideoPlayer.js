import React, { Component } from "react";
import KoloPlay from '../video/kolo.mov'

// import ТвояНазваВідео from "./путь/до/відео"

// ... src={ТвояНазваВідео} ...

class VideoPlayer extends Component{

  render(){

  return (
    <video controls width="450">
      <source src={KoloPlay}></source>
    </video>
  )
}
}

  export default VideoPlayer