// react libraries
import React from 'react';

// styles
import './NotificationIcon.scss';

const NotificationIcon = ({ number }) => (
  <div className="notification">
    <img src='https://res.cloudinary.com/store-manager/image/upload/v1569217511/bell.svg' alt='bell' />
    { number && <div className="notification__circle">
      <p>{ number }</p>
    </div> }
  </div>
);

export default NotificationIcon
