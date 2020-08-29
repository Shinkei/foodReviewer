import { FETCH_RECIPES, GET_RECIPE } from '../actions/actionTypes';

const initialState = {
  recipes: [],
  selectedRecipe: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPE:
      const selected = state.recipes.find(
        recipe => recipe.id === action.payload
      );
      return { ...state, selectedRecipe: selected };
    default:
      return state;
  }
};
