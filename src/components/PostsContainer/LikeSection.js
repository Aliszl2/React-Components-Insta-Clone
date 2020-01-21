import React from 'react';
// import Post from "./Post";

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={()=>props.setLikes(props.likes+1)}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.likes} 
       likes</p>
</div>
  )
};

export default LikeSection;
