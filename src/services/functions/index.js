const shuffleArray = (array) => {
  if (Array.isArray(array)) return array.sort(() => 0.5 - Math.random());
};

export const functions = {
  shuffleArray,
};
