import { fetchRecipes } from './index';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { FETCH_RECIPES } from './actionTypes';

/**
 * Read the local index.json file where the mock data is
 */
const jsonPromise = Promise.resolve(
  JSON.parse(readFileSync(resolve(__dirname, `./__data__/index.json`)))
);

/**
 * Mocked function
 * mock the fetch function, to return the mock data fron local file
 */
jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () => jsonPromise,
  });
});

describe('actions', () => {
  describe('fetchRecipes', () => {
    it('should fetch a list of recipes from the API', async () => {
      const response = await fetchRecipes();

      const dispatch = data => {
        expect(Array.isArray(data.payload)).toBe(true);
        expect(data.payload).toHaveLength(1);
      };

      await response(dispatch);
    });

    it('should fetch one recipe from the API with the name of "Crispy Fish Goujons "', async () => {
      const response = await fetchRecipes();

      const dispatch = data => {
        const recipe = data.payload[0];
        expect(recipe).toHaveProperty('name');
        expect(recipe.name).toBe('Crispy Fish Goujons ');
      };

      await response(dispatch);
    });

    it('should dispatch type FETCH_RECIPES"', async () => {
      const response = await fetchRecipes();

      const dispatch = data => {
        expect(data.type).toBe(FETCH_RECIPES);
      };

      await response(dispatch);
    });
  });
});
