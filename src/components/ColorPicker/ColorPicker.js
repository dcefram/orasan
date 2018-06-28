import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import cx from 'classnames';

// Stylesheets
import './ColorPicker.css';

const ColorPicker = ({
  onChange,
  colors = ['black', 'red', 'blue', 'green'],
  color = 'black',
}) => (
  <div>
    <label>Display color:</label>
    {colors.map((value, index) => (
      <a
        key={`${value}-${index}`}
        className={cx(value, { active: value === color })}
        data-color={value}
        onClick={onChange}
      >
        {capitalize(value)}
      </a>
    ))}
  </div>
);

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  colors: PropTypes.array,
  color: PropTypes.string,
};

export default ColorPicker;
