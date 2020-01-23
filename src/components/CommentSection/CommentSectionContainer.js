// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
  // 1 - Add state for the comments
  const [allComments, setAllComments] = useState(props.comments);
  // 3 - create a function for the storing new comments
  const addComment = (comment) => {
    // spread existing comments and add new one
     setAllComments([...allComments, comment]);
  };
  // console.log(props.addNewComment);
  return (
    <div>
      {/* 2 - map through the comments data and return the Comment component */
      allComments.map(comment => {
        return <Comment comment={comment} />;
      })}
      <CommentInput
        // 4 - pass the addComment function as props
        submitComment={addComment}
        // addNewComment={props.addNewComment}
      />
    </div>
  );
};

export default CommentSection;
