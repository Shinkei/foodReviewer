import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getRecipe, updateRating } from '../actions';
import { calculateRating } from '../utils';
import RatingStars from '../components/RatingStars';
import IngredientsList from '../components/IngredientsList';
import DetailsList from '../components/DetailsList';
import Colors from '../utils/colors';
import Theme from '../utils/theme';

const styles = {
  primaryText: Theme.primaryText,
  secondaryText: Theme.secondaryText,
  root: {
    backgroundColor: Colors.vistaWhite,
  },
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
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.white,
    position: 'relative',
    top: -80,
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
    color: Colors.black,
  },
  ingredients: {
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
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

  handleUpdateRating = rating => {
    const { updateRating, selectedRecipe } = this.props;
    updateRating(selectedRecipe.id, rating);
  };

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
      <main className={classes.root}>
        <img src={image} alt="recipe" className={classes.image} />
        <section className={classes.mainSection}>
          <div className={classes.titleContainer}>
            <div>
              <h1 className={classes.primaryText}>{name}</h1>
              <h2 className={classNames(classes.primaryText, classes.subtitle)}>
                {headline}
              </h2>
            </div>
            <RatingStars
              big
              rating={calculateRating(rating)}
              className={classes.rating}
              classes={{ ratingNumber: classes.ratingNumber }}
              onChange={this.handleUpdateRating}
            />
          </div>
          <div className={classes.descriptionContainer}>
            <p className={classNames(classes.primaryText, classes.description)}>
              {description}
            </p>
            <DetailsList
              time={time}
              difficulty={difficulty}
              calories={calories}
              carbos={carbos}
              proteins={proteins}
              fats={fats}
              classes={{ detailTitle: classes.detailTitle }}
              className={classes.details}
            />
          </div>
          <IngredientsList
            ingredients={ingredients}
            className={classes.ingredients}
          />
        </section>
      </main>
    );
  }
}

function mapStateToProps({ recipes: recipesReducer }) {
  return { selectedRecipe: recipesReducer.selectedRecipe };
}

export default connect(mapStateToProps, { getRecipe, updateRating })(
  withStyles(styles)(RecipeDetail)
);
