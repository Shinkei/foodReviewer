import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import RatingStars from './RatingStars';

const styles = {
  root: {
    width: '100%',
    height: 'auto',
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
    marginTop: 8,
    marginBottom: 0,
  },
  details: {
    display: 'flex',
    '& > *': {
      marginRight: 8,
    },
  },
};

const periods = { M: 'Minutes', H: 'Hours', PT: 'Preparation Time: ' };

const RecipeCard = ({
  name,
  headline,
  image,
  rating,
  calories,
  time,
  classes,
}) => {
  let timeArray = time
    ? time.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)
    : ['no time'];
  timeArray = timeArray.map(element => periods[element] || element);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0) 10%,rgba(0,0,0,0.8) 80%),url(${image})`,
      }}>
      <h3 className={classes.text}>{name}</h3>
      <h5 className={classes.text}>{headline}</h5>
      <div className={classes.details}>
        <h6 className={classes.text}>{`🔥 ${calories || 'no info'}`}</h6>
        <h6 className={classes.text}>{`⏲ ${timeArray.join(' ')}`}</h6>
      </div>
      <RatingStars rating={rating} />
    </div>
  );
};

RecipeCard.defaultProps = {
  headline: '',
  calories: 'no info',
  time: 'no time',
  rating: 0,
};

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  calories: PropTypes.string,
  time: PropTypes.string,
};

export default withStyles(styles)(RecipeCard);
