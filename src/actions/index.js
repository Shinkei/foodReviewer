import { FETCH_RECIPES, GET_RECIPE } from './actionTypes';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchRecipes = () => async dispatch => {
  let res = await fetch(baseUrl);
  res = await res.json();

  dispatch({
    type: FETCH_RECIPES,
    payload: res,
  });
};

export const getRecipe = id => async dispatch => {
  dispatch({
    type: GET_RECIPE,
    payload: id,
  });
};
