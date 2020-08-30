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

const Star = ({ value, rating, big, onClick, classes }) => {
  return (
    <span className={classes.root} style={{ fontSize: big ? 24 : 12 }}>
      <label>
        <input
          type="ratio"
          value={value}
          className={classes.radio}
          onClick={() => onClick(value)}
        />
        {value <= rating ? '★' : '☆'}
      </label>
    </span>
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
