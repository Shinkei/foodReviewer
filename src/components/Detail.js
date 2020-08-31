import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Colors from '../utils/colors';

const styles = {
  secondaryText: {
    fontFamily: 'Source Sans Pro',
    lineHeight: '1.7em',
    fontWeight: 400,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 900,
  },
  text: {
    color: Colors.grey,
  },
};

const Detail = ({ emoji, text, label, classes }) => {
  return (
    <div
      className={classNames(classes.secondaryText, classes.row)}
      aria-label={label}>
      <div className={classes.label}>
        {!!emoji && (
          <span role="img" aria-label="time">
            {emoji}{' '}
          </span>
        )}
        {label}
      </div>
      <div className={classes.text}>{text}</div>
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
