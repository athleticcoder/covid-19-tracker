import React, { Fragment } from 'react';
import spinner from './spinner1.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </Fragment>
  );
};

export default Spinner;
