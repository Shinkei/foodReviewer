import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';

// I am using combine reducers for maintenance , so in the future it will be easy just to add a new reducer
const reducer = combineReducers({
  recipes: recipesReducer,
});

export default reducer;
