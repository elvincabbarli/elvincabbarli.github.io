import React from "react";
import './videoitem.css'

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
        <div className="ui embed">
            <iframe src={videoSrc} frameborder="0"></iframe>
        </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <button className="chanel-button">Subscribe Channel</button>
      </div>
    </div>
  );
};

export default VideoDetails;
