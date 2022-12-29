// import { getToken } from "./selectors";
import * as types from "./types";
import * as TAG from "../../../constant/tag";
import { getToken, getUserRoleCodes } from "./selectors";

const loginStart = () => ({ type: types.LOGIN_START });
const loginSuccess = (token, user) => ({
  type: types.LOGIN_SUCCESS,
  payload: { token, user },
});
const loginErr = (err) => ({ type: types.LOGIN_ERR, payload: err });

const logoutStart = () => ({ type: types.LOGOUT_START });
const logoutSuccess = () => ({ type: types.LOGOUT_SUCCESS });
// const logoutErr = (err) => ({ type: types.LOGOUT_ERR, payload: err });

const refreshStart = () => ({ type: types.REFRESH_DATA_START });
const refreshSuccess = (token, user) => ({
  type: types.REFRESH_DATA_SUCCESS,
  payload: { token, user },
});
const refreshErr = (err) => ({ type: types.REFRESH_DATA_ERR, payload: err });

export const login = (email, password) => async (dispatch, getState, api) => {
  console.log(TAG.AUTH, "action login start");
  dispatch(loginStart());

  const { token, error: loginError } = await api.login(email, password);

  if (!loginError) {
    console.log(
      TAG.AUTH,
      "action login start get user profile with token:",
      token
    );
    const { error, data } = await api.getUserProfile(token);

    if (!error) {
      localStorage.setItem("token", token);
      dispatch(loginSuccess(token, data));
    } else {
      console.log(TAG.AUTH, "action login error: ", error);
      dispatch(loginErr(error));
    }

    return loginSuccess && !error;
  } else {
    console.log(TAG.AUTH, "action login error: ", loginError);
    dispatch(loginErr(loginError));
  }

  return false;
};

export const refreshUserData = () => async (dispatch, getState, api) => {
  console.log(TAG.AUTH, "action refresh user data start");
  dispatch(refreshStart());

  const token = getToken(getState());
  const userRoleCodes = getUserRoleCodes(getState());

  console.log(
    TAG.AUTH,
    "has token: ",
    token,
    "user role_kode: ",
    userRoleCodes
  );

  if (token) {
    const { error, data: user } = await api.getUserProfile(token);
    console.log("user", user, "error", error);
    if (!error) {
      console.log(TAG.AUTH, "action refresh user data success");
      dispatch(refreshSuccess(token, user));
    } else {
      console.log(TAG.AUTH, "action refresh user data error");
      dispatch(refreshErr(error));
    }
  } else {
    console.log(TAG.AUTH, "action refresh user data error");
    dispatch(refreshErr());
  }
};

export const logOut = () => async (dispatch, getState, api) => {
  console.log(TAG.AUTH, "action logout start");
  dispatch(logoutStart());
  localStorage.removeItem("token");
  window.location.href = "/login";
  console.log(TAG.AUTH, "action logout success");
  dispatch(logoutSuccess());
};
