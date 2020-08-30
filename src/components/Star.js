import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  root: {
    color: 'gold',
    marginRight: 2,
    fontSize: 12,
  },
  radio: {
    display: 'none',
  },
};

const Star = ({
  value,
  hover,
  rating,
  big,
  onClick,
  onHoverEnter,
  onHoverLeave,
  classes,
}) => {
  return (
    <label className={classes.root} style={{ fontSize: big ? 24 : 12 }}>
      <input
        type="ratio"
        name="rating"
        defaultValue={value}
        className={classes.radio}
        onClick={e => {
          e.preventDefault();
          onClick(value);
        }}
      />
      <span
        onMouseEnter={() => onHoverEnter(value)}
        onMouseLeave={() => onHoverLeave()}>
        {value <= (hover || rating) ? '★' : '☆'}
      </span>
    </label>
  );
};

Star.defaultProps = {
  big: false,
  onClick: () => {},
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  big: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(styles)(Star);
