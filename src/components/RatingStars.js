import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Star from './Star';
import Colors from '../utils/colors';

const styles = {
  ratingNumber: {
    marginLeft: 6,
    fontFamily: 'Source Sans Pro',
    fontSize: 12,
    color: Colors.white,
  },
};

class RatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, hover: null };
  }

  /**
   * Check if redux send a different rating value to overwrite
   * the actual one
   * @param {object} props
   * @param {object} state
   */
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

  /**
   * Store the start value where the mouse is
   * @param {number} hover
   */
  handleHoverEnter = hover => {
    this.setState({ hover });
  };

  /**
   * Clan the state for the hover vaue when the mouse leave the star
   */
  handleHoverLeave = () => {
    this.setState({ hover: null });
  };

  render() {
    const { classes, big, className } = this.props;
    const { rating, hover } = this.state;
    return (
      <form className={className}>
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
      </form>
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
