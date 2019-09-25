// react libraries
import React from 'react';

// styles
import './Button.scss';

// components
import { DownArrow } from '../../assets/svg';

const Button = ({ showTransferBtn }) => {
  return (
    <div className="button-component">
      { !showTransferBtn ? (
        <div className="button-component__accept-payment">
          <span className="button">
            <img src="https://res.cloudinary.com/store-manager/image/upload/v1569154389/Bitmap_Copy.png" alt=""/>
            <span>Accept payment</span> 
          </span>
        </div>
        ) : ( 
          <div className="button-component__new-transfer">
            <span className="button">
              <p>New transfer</p>
              < DownArrow />
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Button;
