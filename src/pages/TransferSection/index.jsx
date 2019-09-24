// react libraries
import React, { Component } from 'react';

// styles
import './TransferSection.scss';

// component
import TableHeader from '../../components/TableHeader';
import Button from '../../components/Button';
import NoTransfers from '../../components/NoTransfers';

class TransferSection extends Component {
  render() {
    return (
      <div className="transfers">
        <div className="transfers__table">
          <Button showTransferBtn={true} />
          <TableHeader classes="heading-color" contents={["Reference","Status","Amount"]} />
          <div className="transfers__table__content">
            <NoTransfers /> 
          </div>
        </div>
      </div> 
    )
  }
}

export default TransferSection;
