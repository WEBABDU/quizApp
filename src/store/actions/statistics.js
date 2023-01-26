import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore/lite";
import { db } from "./../../firebase";

const SUCCESS = "STATISTICS_SUCCESS";
const FAILURE = "STATISTICS_FAILURE";
const PENDING = "STATISTICS_PENDING";
const LEADER_STATISTICS_SUCCESS = "LEADER_STATISTICS_SUCCESS";


const pending = () => ({ type: PENDING });

const success = (payload) => ({ type: SUCCESS, payload });

const failure = (payload) => ({ type: FAILURE, payload });

const leaderSucces = (payload) => ({type: LEADER_STATISTICS_SUCCESS, payload})

const getStatsticsThunk = (userId) => async (dispatch) => {
  dispatch(pending());
  try {
    const docRef = doc(db, "scores", userId);
    const response = await getDoc(docRef);
    const payload = response.data().scores.map((element) => ({
      ...element,
      username: response.data().username,
    }));

    dispatch(success(payload));
  } catch (error) {
    dispatch(failure(error.message));
  }
};

const getLeaderThunk = () => async (dispatch) => {
  dispatch(pending());
  try {
    const leaderRef = collection(db, "scores");
    const leaderQuery = query(leaderRef);

    const response = await getDocs(leaderQuery);

    const payload = [];
    response.forEach((doc) => {
      const arr = doc.data().scores.map((element) => ({
        ...element,
        username: doc.data().username,
        id: doc.id,
      }));
      payload.push(...arr);
    });
    dispatch(leaderSucces(payload))
  } catch (error) {
    dispatch(failure(error.message));
  }
};

export const statisticsActions = {
  SUCCESS,
  PENDING,
  FAILURE,
  LEADER_STATISTICS_SUCCESS,
  success,
  pending,
  failure,
  getStatsticsThunk,
  getLeaderThunk,
};
