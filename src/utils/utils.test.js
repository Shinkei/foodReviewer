import { time2Text, mapDifficulty, calculateRating } from './index';
/**
 * Test for the utils funtions
 */
describe('Utils', () => {
  describe('time2Text', () => {
    it('should time2Text convert PT40M to text', () => {
      const input = 'PT40M';

      const result = time2Text(input);
      expect(result).toBe('Preparation Time: 40 Minutes');
    });

    it('should time2Text NOT convert only letters', () => {
      const input = 'PTM';

      const result = time2Text(input);
      expect(result).toBe('PTM');
    });

    it('should time2Text convert HOURS AND MINUTES to text', () => {
      const input = 'PT1H30M';

      const result = time2Text(input);
      expect(result).toBe('Preparation Time: 1 Hours 30 Minutes');
    });
  });

  describe('mapDifficulty', () => {
    it('should map difficulty 0 to Super Easy', () => {
      const input = 0;

      const result = mapDifficulty(input);
      expect(result).toBe('Super Easy');
    });
    it('should map difficulty 1 to Easy', () => {
      const input = 1;

      const result = mapDifficulty(input);
      expect(result).toBe('Easy');
    });
    it('should map difficulty 2 to Medium', () => {
      const input = 2;

      const result = mapDifficulty(input);
      expect(result).toBe('Medium');
    });
    it('should map difficulty 3 to Difficult', () => {
      const input = 3;

      const result = mapDifficulty(input);
      expect(result).toBe('Difficult');
    });
    it('should NOT map difficulty outside of valid values, return empty string', () => {
      const input = 6;

      const result = mapDifficulty(input);
      expect(result).toBe('');
    });
  });

  describe('calculateRating', () => {
    it('should calculate average rating for [1,0,0,0,1] = 3.0', () => {
      const input = [1, 0, 0, 0, 1];

      const result = calculateRating(input);
      expect(result).toBe(3.0);
    });
    it('should calculate average rating for [1,1,1,1,1] = 3.0', () => {
      const input = [1, 1, 1, 1, 1];

      const result = calculateRating(input);
      expect(result).toBe(3.0);
    });
    it('should NOT calculate rating for input different than array, just return the same', () => {
      const input = 4.3;

      const result = calculateRating(input);
      expect(result).toBe(4.3);
    });
  });
});
