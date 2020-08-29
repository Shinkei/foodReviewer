import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getRecipe } from '../actions';
import { time2Text, mapDifficulty } from '../utils';
import RatingStars from '../components/RatingStars';

const styles = {
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: 500,
    objectFit: 'cover',
  },
  mainSection: {
    margin: '0px 16px',
    padding: 16,
    border: '1px solid',
    borderColor: 'lightgray',
    backgroundColor: 'white',
    position: 'relative',
    top: -80,
  },
  primaryText: {
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '-0.3px',
    lineHeight: '1.7em',
    color: '#343434',
    fontWeight: 400,
    margin: 0,
  },
  secondaryText: {
    fontFamily: 'Source Sans Pro',
    lineHeight: '1.7em',
    fontWeight: 400,
  },
  description: {
    width: '70%',
    textAlign: 'justify',
    paddingRight: 12,
    fontSize: 16,
    lineHeight: '24px',
    '@media screen and (max-width: 700px)': {
      width: '100%',
    },
  },
  descriptionContainer: {
    display: 'flex',
    paddingTop: 12,
    '& > *': {
      paddingTop: 12,
      borderTop: '1px solid',
      borderColor: 'rgba(34, 34, 34, 0.1)',
    },
    '@media screen and (max-width: 700px)': {
      flexWrap: 'wrap',
    },
  },
  details: {
    width: '30%',
    padding: '12px 12px 0px 12px',
    '@media screen and (max-width: 700px)': {
      width: '100%',
      padding: '12px 0px',
      borderTop: 'none',
    },
  },
  ingredientElement: {
    listStyle: 'none',
    '&::before': {
      content: '"🌱 "',
    },
  },
  ingredientList: {
    padding: 0,
  },
  detailTitle: {
    display: 'none',
    '@media screen and (max-width: 700px)': {
      display: 'inherit',
    },
  },
  titleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingNumber: {
    marginLeft: 6,
    fontFamily: 'Source Sans Pro',
    fontSize: 24,
    color: '#000',
  },
};

class RecipeDetail extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getRecipe,
    } = this.props;

    getRecipe(id);
  }
  render() {
    const { selectedRecipe = {}, classes } = this.props;
    const {
      image,
      name,
      headline,
      description,
      time,
      difficulty,
      calories,
      carbos,
      proteins,
      fats,
      ingredients = [],
      rating,
    } = selectedRecipe;
    return (
      <>
        <img src={image} alt="recipe" className={classes.image} />
        <section className={classes.mainSection}>
          <div className={classes.titleContainer}>
            <div>
              <h1 className={classes.primaryText}>{name}</h1>
              <h4 className={classes.primaryText}>{headline}</h4>
            </div>
            <RatingStars
              big
              rating={rating}
              className={classes.rating}
              classes={{ ratingNumber: classes.ratingNumber }}
            />
          </div>
          <div className={classes.descriptionContainer}>
            <p className={classNames(classes.primaryText, classes.description)}>
              {description}
            </p>
            <div className={classes.details}>
              <h3
                className={classNames(
                  classes.primaryText,
                  classes.detailTitle
                )}>
                Details
              </h3>
              <div className={classes.secondaryText}>
                <span role="img" aria-label="time">
                  ⏲{' '}
                </span>
                {time2Text(time)}
              </div>
              <div className={classes.secondaryText}>
                <span role="img" aria-label="difficulty">
                  💪{' '}
                </span>Difficulty: {mapDifficulty(difficulty)}
              </div>
              <div className={classes.secondaryText}>
                <span role="img" aria-label="calories">
                  🔥{' '}
                </span>
                {calories}
              </div>
              <div className={classes.secondaryText}>
                <span role="img" aria-label="carbos">
                  🥖{' '}
                </span>
                {carbos} Carbs
              </div>
              <div className={classes.secondaryText}>
                <span role="img" aria-label="proteins">
                  🍖{' '}
                </span>
                {proteins} Proteins
              </div>
              <div className={classes.secondaryText}>
                <span role="img" aria-label="proteins">
                  🧈{' '}
                </span>
                {fats} Fats
              </div>
            </div>
          </div>
          <h3 className={classes.primaryText}>Ingredients</h3>
          <ul className={classes.ingredientList}>
            {ingredients.map(ingredient => (
              <li
                className={classNames(
                  classes.secondaryText,
                  classes.ingredientElement
                )}>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

function mapStateToProps({ recipes: recipesReducer }) {
  return { selectedRecipe: recipesReducer.selectedRecipe };
}

export default connect(
  mapStateToProps,
  { getRecipe }
)(withStyles(styles)(RecipeDetail));
