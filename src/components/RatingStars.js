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
    this.state = { rating: 0, hover: null };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.rating !== state.rating) {
      return { rating: props.rating || 0 };
    }
    return null;
  }

  handleRatingChange = newRating => {
    const { onChange } = this.props;

    this.setState({ rating: newRating }, () => {
      if (onChange) {
        onChange(newRating);
      }
    });
  };

  handleHoverEnter = hover => {
    this.setState({ hover });
  };
  handleHoverLeave = () => {
    this.setState({ hover: null });
  };

  render() {
    const { classes, big, className } = this.props;
    const { rating, hover } = this.state;
    return (
      <span className={className}>
        {[1, 2, 3, 4, 5].map(num => (
          <Star
            key={num}
            value={num}
            hover={hover}
            rating={rating}
            big={big}
            onClick={this.handleRatingChange}
            onHoverEnter={this.handleHoverEnter}
            onHoverLeave={this.handleHoverLeave}
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
