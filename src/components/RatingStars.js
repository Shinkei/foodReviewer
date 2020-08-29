import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Star from './Star';

const styles = {
  ratingNumber: {
    marginLeft: 6,
    fontFamily: 'Source Sans Pro',
    fontSize: 14,
    color: '#fff',
  },
};

const RatingStars = ({ rating, classes }) => {
  rating = rating > 0 ? rating : 0;
  return (
    <span>
      {[1, 2, 3, 4, 5].map(num => <Star value={num} rating={rating} />)}
      <span className={classes.ratingNumber}>{rating}</span>
    </span>
  );
};

RatingStars.propTyoes = {
  rating: PropTypes.number.isRequired,
};

export default withStyles(styles)(RatingStars);
