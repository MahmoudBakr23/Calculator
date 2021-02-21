import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <div className="Button">
      <button type="button">{name}</button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
