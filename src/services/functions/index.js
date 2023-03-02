const shuffleArray = (array) => {
  if (Array.isArray(array)) return array.sort(() => 0.5 - Math.random());
};

const sortObjArrayByKey = (array, key) =>
  array.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));

export const functions = {
  shuffleArray,
  sortObjArrayByKey,
};
