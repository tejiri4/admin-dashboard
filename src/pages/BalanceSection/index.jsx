// react libraries
import React from 'react';

// styles
import './BalanceSection.scss';

// components
import TableRow from '../../components/TableRow';
import TableHeader from '../../components/TableHeader';

// fixtures
import { tableRowContents, tableHeaderContents } from './fixture';

const BalanceSection = () => {
  return (
    <div className="balance-section">
      <div className="balance-section__table">
        <TableHeader contents={tableHeaderContents}/>
        <div>
          {
            tableRowContents.map(({name, pending, available, imgUrl },index) =>  <TableRow
              name={name} 
              pending={pending}
              available={available}
              imgUrl={imgUrl}
              key={index}
            />)
          }
        </div>
      </div>
    </div> 
  )
}

export default BalanceSection;
