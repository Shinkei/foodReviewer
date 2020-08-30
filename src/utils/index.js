const periods = { M: 'Minutes', H: 'Hours', PT: 'Preparation Time: ' };
const difficulties = {
  0: 'Super Easy',
  1: 'Easy',
  2: 'Medium',
  3: 'Difficult',
};

export const time2Text = time => {
  const timeArray = time
    ? time.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)
    : ['no time'];
  return timeArray.map(element => periods[element] || element).join(' ');
};

export const mapDifficulty = difficulty => {
  return difficulties[difficulty];
};

export const calculateRating = ratingList => {
  if (Array.isArray(ratingList)) {
    const votes = ratingList.reduce((acc, rating) => (acc += rating), 0);
    const rating = ratingList.reduce(
      (acc, rating, index) => (acc += rating * (index + 1)),
      0
    );
    return parseFloat((rating / votes).toFixed(1));
  }
  return ratingList;
};
