// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  console.log(props.addNewComment);
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);

  
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={likes} setLikes={setLikes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        addNewComment={props.addNewComment}
      />
    </div>
  );
};

export default Post;
