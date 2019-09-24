// react libraries
import React from 'react';

// styles
import './Button.scss';

const Button = ({ showTransferBtn }) => {
  return (
    <div className="button">
      { !showTransferBtn ? (
        <div className="button__accept-payment">
          <button>
            <img src="https://res.cloudinary.com/store-manager/image/upload/v1569154389/Bitmap_Copy.png" alt=""/>
            <span>Accept payment</span> 
          </button>
        </div>
        ) : ( 
          <div className="button__new-transfer">
            <button>
              <p>New transfer</p>
              <span> ^</span>
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Button;
