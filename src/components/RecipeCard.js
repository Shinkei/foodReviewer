import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { time2Text } from '../utils';
import Colors from '../utils/colors';
import Theme from '../utils/theme';

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
    ...Theme.primaryText,
    color: Colors.white,
  },
  details: {
    display: 'flex',
    marginTop: 12,
    '& > *': {
      marginRight: 8,
    },
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
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
    <section
      className={classNames(classes.root, className)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0) 10%,rgba(0,0,0,0.8) 90%),url(${image})`,
      }}>
      <h1 className={classNames(classes.text, classes.title)}>{name}</h1>
      <h2 className={classNames(classes.text, classes.subtitle)}>{headline}</h2>
      <div className={classes.details}>
        <h3
          className={classNames(classes.text, classes.caption)}
          aria-label={`${calories} calories`}>{`🔥 ${calories ||
          'no info'}`}</h3>
        <h3
          className={classNames(classes.text, classes.caption)}
          aria-label={time2Text(time)}>{`⏲ ${time2Text(time)}`}</h3>
      </div>
    </section>
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
