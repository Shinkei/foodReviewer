import reducer, { updateRecipeRating } from './recipesReducer';
import {
  FETCH_RECIPES,
  GET_RECIPE,
  UPDATE_RATING,
} from '../actions/actionTypes';

describe('recipesReducer', () => {
  /**
   * Test for utility function updateRecipeRating
   */
  describe('updateRecipeRating', () => {
    /* use this recipes list as a global variable for testing in
     * all test cases
     */
    let recipes = [
      {
        id: '1a',
        rating: 4,
      },
      {
        id: '2b',
        rating: 3,
      },
      {
        id: '3c',
      },
    ];

    it('should find the corresponding recipe and update the rating field', () => {
      const id = '2b';
      const value = 5;

      const response = updateRecipeRating(recipes, id, value);

      expect(response[1]).toMatchObject({ id: '2b', rating: [0, 0, 1, 0, 1] });
    });

    it('should store new recipe in the same position of the array', () => {
      const id = '2b';
      const value = 5;

      const response = updateRecipeRating(recipes, id, value);

      expect(response[1]).toMatchObject({ id: '2b', rating: [0, 0, 1, 0, 1] });
    });

    it('should create a rating attribute for a recipe first rate', () => {
      const id = '3c';
      const value = 5;

      const response = updateRecipeRating(recipes, id, value);
      expect(response[2]).toMatchObject({ id: '3c', rating: [0, 0, 0, 0, 1] });
    });

    it('should return the same recipes list if the id in not found', () => {
      const id = '4d';
      const value = 5;

      const response = updateRecipeRating(recipes, id, value);
      expect(response).toMatchObject(recipes);
    });
  });

  /**
   * Test for the reducer switch logic
   */
  describe('recipesReducerLogic', () => {
    it('should return the initialState', () => {
      const initialState = {
        recipes: [],
        selectedRecipe: {},
      };

      const response = reducer(undefined, { type: 'Unknown_action' });

      expect(response).toMatchObject(initialState);
    });

    it('should load the recipes for action FETCH_RECIPES', () => {
      const recipes = [{ id: '1a' }, { id: '2b' }];

      const expectedState = {
        recipes,
        selectedRecipe: {},
      };

      const response = reducer(undefined, {
        type: FETCH_RECIPES,
        payload: recipes,
      });

      expect(response).toMatchObject(expectedState);
    });

    it('should set to empty object selectedRecipe for action FETCH_RECIPES', () => {
      const initialState = {
        recipes: [{ id: '-1a' }, { id: '-2b' }],
        selectedRecipe: { id: '1a' },
      };

      const recipes = [{ id: '1a' }, { id: '2b' }];

      const expectedState = {
        recipes,
        selectedRecipe: {},
      };

      const response = reducer(initialState, {
        type: FETCH_RECIPES,
        payload: recipes,
      });

      expect(response).toMatchObject(expectedState);
    });

    it('should select a recipe for action GET_RECIPE', () => {
      const initialState = {
        recipes: [{ id: '1a' }, { id: '2b' }],
        selectedRecipe: {},
      };

      const expectedState = {
        recipes: [{ id: '1a' }, { id: '2b' }],
        selectedRecipe: { id: '2b' },
      };

      const response = reducer(initialState, {
        type: GET_RECIPE,
        payload: '2b',
      });

      expect(response).toMatchObject(expectedState);
    });

    it('should set to empty object selectedRecipe for action GET_RECIPE when id is not found', () => {
      const initialState = {
        recipes: [{ id: '1a' }, { id: '2b' }],
        selectedRecipe: { id: '1a' },
      };

      const expectedState = {
        recipes: [{ id: '1a' }, { id: '2b' }],
        selectedRecipe: {},
      };

      const response = reducer(initialState, {
        type: GET_RECIPE,
        payload: '3c',
      });

      expect(response).toMatchObject(expectedState);
    });

    it('should update rating for selected recipe for action UPDATE_RATING', () => {
      const initialState = {
        recipes: [
          { id: '1a', rating: 3 },
          { id: '2b', rating: 1 },
        ],
        selectedRecipe: { id: '1a' },
      };

      const expectedState = {
        recipes: [
          { id: '1a', rating: [0, 0, 1, 0, 1] },
          { id: '2b', rating: 1 },
        ],
        selectedRecipe: { id: '1a', rating: [0, 0, 1, 0, 1] },
      };

      const response = reducer(initialState, {
        type: UPDATE_RATING,
        recipeId: '1a',
        rating: '5',
      });

      expect(response).toMatchObject(expectedState);
    });
  });
});
