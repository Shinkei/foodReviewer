import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Star from './Star';

const styles = {
  ratingNumber: {
    marginLeft: 6,
    fontFamily: 'Source Sans Pro',
    fontSize: 12,
    color: '#fff',
  },
};

const RatingStars = ({ rating, classes, big, className }) => {
  rating = rating > 0 ? rating : 0;
  return (
    <span className={className}>
      {[1, 2, 3, 4, 5].map(num => (
        <Star value={num} rating={rating} big={big} />
      ))}
      <span className={classes.ratingNumber}>{rating}</span>
    </span>
  );
};

RatingStars.defaultProps = {
  className: '',
  big: false,
};

RatingStars.propTyoes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
  big: PropTypes.bool,
};

export default withStyles(styles)(RatingStars);
