import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  secondaryText: {
    fontFamily: 'Source Sans Pro',
    lineHeight: '1.7em',
    fontWeight: 400,
  },
};

const Detail = ({ emoji, text, classes }) => {
  return (
    <div className={classes.secondaryText}>
      {!!emoji && (
        <span role="img" aria-label="time">
          {emoji}{' '}
        </span>
      )}
      {text}
    </div>
  );
};

Detail.defaultProps = {
  emoji: null,
  text: '',
};

Detail.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
};

export default withStyles(styles)(Detail);
