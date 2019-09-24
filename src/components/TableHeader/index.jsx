// react libraries
import React from 'react';

// styles
import './TableHeader.scss';

const TableHeader = ({ contents, classes }) => {
  return (
    <div className={`table-header table-header__${classes || ''}`}>
     { contents.map((content, index) => <p key={index}>{content}</p>)}
    </div>
  )
}

export default TableHeader;
