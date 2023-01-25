const SET_CATERGORY = "SET_CATERGORY";
const SET_DIFFICULTY = "SET_DIFFICULTY";
const SET_LIMIT = "SET_LIMIT";

const setCategory = (category) => ({ type: SET_CATERGORY, payload: category });

const setDifficulty = (difficulty) => ({
  type: SET_DIFFICULTY,
  payload: difficulty,
});

const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });

export const settingsActions = {
  SET_CATERGORY,
  SET_DIFFICULTY,
  SET_LIMIT,
  setCategory,
  setDifficulty,
  setLimit,
};
