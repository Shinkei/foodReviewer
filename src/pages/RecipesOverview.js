import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes, updateRating } from '../actions';
import RecipeCard from '../components/RecipeCard';
import { calculateRating } from '../utils';
import RatingStars from '../components/RatingStars';

const styles = {
  recipesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: 8,
    gridAutoFlow: 'row',
  },
  recipe: {
    height: 350,
    paddingBottom: 32,
  },
  link: {
    textDecoration: 'none',
  },
  ratingStars: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  recipeLink: {
    position: 'relative',
  },
};

class RecipesOverview extends React.Component {
  componentDidMount() {
    const { recipes } = this.props;
    if (recipes.length === 0) {
      this.props.fetchRecipes();
    }
  }

  handleupdateRating = (id, rating) => {
    const { updateRating } = this.props;
    updateRating(id, rating);
  };

  render() {
    const { recipes, classes } = this.props;
    return (
      <main className={classes.recipesList}>
        {recipes.map(recipe => (
          <div key={recipe.id} className={classes.recipeLink}>
            <Link to={`/recipe/${recipe.id}`} className={classes.link}>
              <RecipeCard
                className={classes.recipe}
                name={recipe.name}
                headline={recipe.headline}
                image={recipe.image}
                rating={calculateRating(recipe.rating)}
                calories={recipe.calories}
                time={recipe.time}
              />
            </Link>
            <RatingStars
              rating={calculateRating(recipe.rating)}
              className={classes.ratingStars}
              onChange={rating => this.handleupdateRating(recipe.id, rating)}
            />
          </div>
        ))}
      </main>
    );
  }
}

function mapStateToProps({ recipes: recipesReducer }) {
  return { recipes: recipesReducer.recipes };
}

export default connect(mapStateToProps, { fetchRecipes, updateRating })(
  withStyles(styles)(RecipesOverview)
);
