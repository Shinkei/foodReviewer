import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipesOverview from './pages/RecipesOverview';
import RecipeDetail from './pages/RecipeDetail';

export default () => {
  return (
    <Switch>
      <Route path="/recipe/:id" component={RecipeDetail} />
      <Route path="/" component={RecipesOverview} />
    </Switch>
  );
};
