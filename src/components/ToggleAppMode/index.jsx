// react libraries
import React from 'react';

// styles
import './ToggleAppMode.scss';

const ToggleAppMode = ({status, handleToggle}) => (
  <div className="toggle">
    <div onClick={handleToggle} className="toggle__mode">
      <div className={`toggle__mode__circle  ${status ? 'live' : 'test'}`} />
    </div>
    <p>
      {status ? 'Live mode' : 'Test mode'}
    </p>
  </div>
);

export default ToggleAppMode;
