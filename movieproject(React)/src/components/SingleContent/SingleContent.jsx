import React, { useState } from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import { Badge } from "@material-ui/core";
import ContentModal from "../ContentModal/ContentModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ContentModal media_type={media_type} id={id}>
        <div className="badge">
        ⭐  
          {Math.round(vote_average)}
        </div>
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type}
          <br /> <br />
          <span className="subTitle">Release Date: {date}</span>
        </span>
      </ContentModal>
    </div>
  );
};

export default SingleContent;
