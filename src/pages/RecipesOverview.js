import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import RecipeCard from '../components/RecipeCard';

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
};

class RecipesOverview extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes, classes } = this.props;
    return (
      <div className={classes.recipesList}>
        {recipes.map(recipe => (
          <RecipeCard
            className={classes.recipe}
            name={recipe.name}
            headline={recipe.headline}
            image={recipe.image}
            rating={recipe.rating}
            calories={recipe.calories}
            time={recipe.time}
          />
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
