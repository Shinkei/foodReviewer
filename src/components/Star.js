import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  root: {
    color: 'gold',
    marginRight: 2,
    fontSize: 12,
  },
};

const Star = ({ value, rating, big, classes }) => {
  return (
    <span className={classes.root} style={{ fontSize: big ? 24 : 12 }}>
      {value <= rating ? '★' : '☆'}
    </span>
  );
};

Star.defaultProps = {
  big: false,
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  big: PropTypes.bool,
};

export default withStyles(styles)(Star);
