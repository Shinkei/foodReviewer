import React from 'react';
import { Route } from 'react-router-dom';
import RecipesOverview from './pages/RecipesOverview';
import RecipeDetail from './pages/RecipeDetail';

export default () => {
  return (
    <div>
      <Route exact path="/" component={RecipesOverview} />
      <Route exact path="/recipe/:id" component={RecipeDetail} />
    </div>
  );
};
