import React from 'react';

const CommentInput = props => {
  console.log(props);
  console.log(props.addNewComment);
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        // onChange={props.changeComment}
        onChange={props.addNewComment}
      />
    </form>
  );
};

export default CommentInput;
