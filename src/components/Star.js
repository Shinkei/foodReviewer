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

const Star = ({ value, rating, classes }) => {
  console.log(typeof value, typeof rating, value >= rating);
  return <span className={classes.root}>{value <= rating ? '★' : '☆'}</span>;
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default withStyles(styles)(Star);
