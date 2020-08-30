import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../actions';
import RecipeCard from '../components/RecipeCard';
import { calculateRating } from '../utils';

const styles = {
  recipesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: 8,
    gridAutoFlow: 'row',
  },
  recipe: {
    height: 350,
  },
  link: {
    textDecoration: 'none',
  },
};

class RecipesOverview extends React.Component {
  componentDidMount() {
    const { recipes } = this.props;
    if (recipes.length === 0) {
      this.props.fetchRecipes();
    }
  }

  render() {
    const { recipes, classes } = this.props;
    return (
      <div className={classes.recipesList}>
        {recipes.map(recipe => (
          <Link
            to={`/recipe/${recipe.id}`}
            className={classes.link}
            key={recipe.id}>
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
        ))}
      </div>
    );
  }
}

function mapStateToProps({ recipes: recipesReducer }) {
  return { recipes: recipesReducer.recipes };
}

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(withStyles(styles)(RecipesOverview));
