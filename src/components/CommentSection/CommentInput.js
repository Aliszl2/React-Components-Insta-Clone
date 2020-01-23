import React, { useState } from 'react';

const CommentInput = props => {
  // 5 - Create a new slice of state for new comment
  const [newComment, addComment] = useState({
    username: 'Ali',
    text: ''
  });

  return (
    <form
      className='comment-form'
      // 8 - add functionality for the submit handler to add new comment
      onSubmit={e => {
        e.preventDefault();
        props.submitComment(newComment);
        // Empty state 
        addComment({
          username: 'Ali',
          text: ''
        });
      }}
    >
      <input
        type='text'
        // 6 - give value the 'value' of state
        value={newComment.text}
        placeholder='Add comment... '
        // onChange={props.changeComment}
        // 7 - add functionality to the onChange handler to manipulate org state
        onChange={e => {
          addComment({
            // spread original comment from state so as not lose username
            ...newComment,
            // change the vale you want to change
            text: e.target.value
          });
        }}
      />
    </form>
  );
};

export default CommentInput;
