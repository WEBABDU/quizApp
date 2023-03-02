import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  auth,
  db,
} from "firebase-config";

const SUCCESS = "AUTH_SUCCESS";
const FAILURE = "AUTH_FAILURE";
const PENDING = "AUTH_PENDING";
const LOGOUT = "AUTH_LOGOUT";

const success = (payload) => ({
  type: SUCCESS,
  payload,
});

const failure = (payload) => ({
  type: FAILURE,
  payload,
});

const pending = () => ({
  type: PENDING,
});

const logout = () => ({
  type: LOGOUT,
});

const registerUserThunk =
  (formData, navigate = () => {}) =>
  async (dispatch) => {
    dispatch(pending());
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const { email, uid } = response.user;
      await updateProfile(auth.currentUser, {
        displayName: formData.username,
      });
      const userRef = doc(db, "users", uid);
      const userScores = doc(db, "scores", uid);
      await setDoc(userRef, { username: formData.username, email });
      await setDoc(userScores, { username: formData.username, scores: [] });
      dispatch(success({ email, uid, username: formData.username }));
      navigate("/");
    } catch (error) {
      dispatch(failure(error.message));
    }
  };

const loginUserThunk =
  (formData, navigate = () => {}) =>
  async (dispatch) => {
    dispatch(pending());
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const { email, uid } = response.user;
      dispatch(success({ email, uid }));
      navigate("/");
    } catch (error) {
      dispatch(failure(error.message));
    }
  };

const checkAuthThunk = (navigate) => (dispatch) => {
  dispatch(pending());
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, uid, displayName } = user;
      dispatch(success({ email, uid, username: displayName }));
      navigate("/");
    } else {
      dispatch(logout());
      navigate("/login");
    }
  });
};

const logoutUserThunk = (navigate) => async (dispatch) => {
  dispatch(pending());
  await signOut(auth);
  dispatch(logout());
  navigate("/login");
};

export const authActions = {
  SUCCESS,
  FAILURE,
  PENDING,
  LOGOUT,
  success,
  failure,
  pending,
  logout,
  registerUserThunk,
  loginUserThunk,
  logoutUserThunk,
  checkAuthThunk,
};
