import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="Display">
      {result}
    </div>
  );
};
Display.prototypes = {
  result: '0',
};

export default Display;
