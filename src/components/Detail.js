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

const Detail = ({ emoji, text, label, classes }) => {
  return (
    <div className={classes.secondaryText} aria-label={label}>
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
  label: '',
};

Detail.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
};

export default withStyles(styles)(Detail);
