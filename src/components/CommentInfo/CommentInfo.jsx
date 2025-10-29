import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <UserInfo user={comment.user} />
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);
