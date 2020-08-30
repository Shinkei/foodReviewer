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

class RatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.rating !== state.rating) {
      return { rating: props.rating || 0 };
    }
  }

  handleRatingChange = newRating => {
    const { onChange } = this.props;

    this.setState({ rating: newRating }, () => {
      if (onChange) {
        onChange(newRating);
      }
    });
  };

  render() {
    const { classes, big, className } = this.props;
    const { rating } = this.state;
    return (
      <span className={className}>
        {[1, 2, 3, 4, 5].map(num => (
          <Star
            value={num}
            rating={rating}
            big={big}
            onClick={this.handleRatingChange}
          />
        ))}
        <span className={classes.ratingNumber}>{rating}</span>
      </span>
    );
  }
}

RatingStars.defaultProps = {
  className: '',
  big: false,
  onChange: null,
};

RatingStars.propTyoes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
  big: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(styles)(RatingStars);
