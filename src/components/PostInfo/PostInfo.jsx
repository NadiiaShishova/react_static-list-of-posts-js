import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>
    <UserInfo user={post.user} />
    <p className="PostInfo__body">{post.body}</p>
    <CommentList comments={post.comments} />
  </div>
);
