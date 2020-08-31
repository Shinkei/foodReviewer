# Jorge Ramirez Test for Hello Fresh

This is a react app that shows a list of recipes that let the user navigate to the detailed recipe and check the description, image, details, and ingredients.
There is the possibility to rate each recipe as many times the user wants and it will show the average rate for each recipe.

### Technologies
 - React
 - Redux
 - React Router
 - JSS
 - Lodash
 - Jest

### Structure

- 📁pages: Contain all pages of the app.
- 📁components: Contain all the sub-components used by pages and gives the possibility to reuse.
- 📁actions: Here you can find the action types and actions used by redux.
- 📁reducers: Here are the index file that combines all reducers (currently 1) and the Recipe reducer, that handle all the actions related with recipes.
- 📁utils: Here are the utility functions that are reused among all different components to process data.
- 🎯index: entrance point of the app, here is connected to the store and the router.
- 🧭routes: Here is defined the routes to the overview and Details page.

### Explanation

The Idea since the beginning was to add redux as state manager because it is also used in Hello Fresh projects, in this order of ideas I created the store, reducer for the recipes, and actions boilerplate.

After this step, I identify the two main pages, Overview, and Details, for the overview page, it has only one component RecipeCard that is shown in a grid, each recipe that is returned by the API is represented in a card with basic information, Name, headline, calories and time.

For the Detail Page, I tried to emulate the detailed page from Hello fresh, showing the image in the top and overlap a white box at the bottom. The box shows all the information, name, description and also shows more info of the recipe divided into different components, DetailsList, that shows the details of the recipe (time, carbos, fats, etc) and the IngredietsList that shows the list of ingredients of the recipe.

Finally, I implemented the RatingStars component that is the component that allows the user to rate the recipes, this is a list of radio buttons, for each recipe it dispatches the rating action, that goes to the store, select the corresponding recipe and update the rating value.


### Installation

To install the dependencies just run the command
```
npm install
```

## Tests

There are unit tests for all the business logic involved.
- Utility functions
- reducer
- actions

to run the unit test, execute the command
```
npm test
```

### Deploy
The deployment is done in netlify, to do so please execute this commands

```
npm run build
netlify deploy
```

### Deploy url

[jorgehellofresh.netlify.app](https://jorgehellofresh.netlify.app)


### Author

Jorge Ramirez [shinkei](https://github.com/shinkei)
