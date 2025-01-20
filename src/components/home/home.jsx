import React from "react";

//importing video and image
//the video link
//the image link

const home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Schedule your life eadsier with us, one ping at a time!</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={image} className="plane" alt="" />
      </div>
    </div>
  );
};

export default home;
