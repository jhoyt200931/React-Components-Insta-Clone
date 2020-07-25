import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {props.data.map(data => {
        return <span>{data}</span>
      })}
    </div>
  );
};

export default Comments;
