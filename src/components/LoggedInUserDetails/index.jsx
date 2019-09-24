// react libraries
import React from 'react';

// styles
import './LoggedInUserDetails.scss';

const LoggedInUserDetails = ({ name }) => (
  <div className="logged-in-user-details">
    <div className="logged-in-user-details__circle">
      { name.charAt(0) }
    </div>
    <div>
      { name }
    </div>
  </div>
);

export default LoggedInUserDetails;
