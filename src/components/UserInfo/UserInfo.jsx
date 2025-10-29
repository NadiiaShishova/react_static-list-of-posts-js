import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <a href={`mailto:${user.email}`} className="UserInfo__email">
      {user.name}
    </a>
  </div>
);
