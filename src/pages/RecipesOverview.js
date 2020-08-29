import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import RecipeCard from '../components/RecipeCard';

const styles = {};

class RecipesOverview extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes } = this.props;
    return (
      <>
        {recipes.map(recipe => (
          <RecipeCard
            name={recipe.name}
            headline={recipe.headline}
            image={recipe.image}
            rating={recipe.rating}
            calories={recipe.calories}
            time={recipe.time}
          />
        ))}
      </>
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
