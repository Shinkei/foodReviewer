import remove from 'lodash/remove';
import {
  FETCH_RECIPES,
  GET_RECIPE,
  UPDATE_RATING,
} from '../actions/actionTypes';

const initialState = {
  recipes: [],
  selectedRecipe: {},
};

/**
 * Find the index of the recipe that is going to be updated, then removed and
 * update the rating, then put back the recipe in it's origianl position
 */
export const updateRecipeRating = (recipes, id, value) => {
  const recipesList = [...recipes];
  const recipeIndex = recipesList.map(recipe => recipe.id).indexOf(id);
  const recipe = remove(recipesList, recipe => recipe.id === id)[0];

  if (recipe) {
    const newRecipe = { ...recipe };
    // if the rating is string, convert it to an array and assign the value as a vote of the rounded star
    if (!Array.isArray(newRecipe.rating)) {
      const prevValue = Math.round(newRecipe.rating);
      newRecipe.rating = new Array(5).fill(0);
      if (prevValue) {
        newRecipe.rating[prevValue - 1] += 1;
      }
    }
    // add a vote to the corresponding start value
    newRecipe.rating[value - 1] += 1;
    const newRecipesList = [...recipesList];
    newRecipesList.splice(recipeIndex, 0, newRecipe);
    return newRecipesList;
  }
  return recipesList;
};

export default (state = initialState, action) => {
  let selected = state.selectedRecipe;
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload, selectedRecipe: {} };
    case GET_RECIPE:
      selected =
        state.recipes.find(recipe => recipe.id === action.payload) || {};
      return { ...state, selectedRecipe: selected };
    case UPDATE_RATING:
      const newRecipes = updateRecipeRating(
        state.recipes,
        action.recipeId,
        action.rating
      );
      selected = newRecipes.find(recipe => recipe.id === action.recipeId);
      return { ...state, recipes: newRecipes, selectedRecipe: selected };

    default:
      return state;
  }
};
