import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { time2Text } from '../utils';

const styles = {
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 16,
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#fff',
    letterSpacing: '-0.3px',
    fontWeight: 400,
    marginTop: 4,
    marginBottom: 0,
  },
  details: {
    display: 'flex',
    marginTop: 12,
    '& > *': {
      marginRight: 8,
    },
  },
};

const RecipeCard = ({
  name,
  headline,
  image,
  rating,
  calories,
  time,
  classes,
  className,
}) => {
  return (
    <div
      className={classNames(classes.root, className)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0) 10%,rgba(0,0,0,0.8) 80%),url(${image})`,
      }}>
      <h3 className={classes.text}>{name}</h3>
      <h5 className={classes.text}>{headline}</h5>
      <div className={classes.details}>
        <h6 className={classes.text}>{`🔥 ${calories || 'no info'}`}</h6>
        <h6 className={classes.text}>{`⏲ ${time2Text(time)}`}</h6>
      </div>
    </div>
  );
};

RecipeCard.defaultProps = {
  headline: '',
  calories: 'no info',
  time: 'no time',
  rating: 0,
  className: '',
};

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  calories: PropTypes.string,
  time: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(styles)(RecipeCard);
