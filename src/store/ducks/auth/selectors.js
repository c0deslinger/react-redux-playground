export const authState = (state) => state.auth; //get from reducer

export const getToken = (state) => authState(state).token;
export const getUser = (state) => authState(state).user;
export const getLoading = (state) => authState(state).loading;
export const getRefreshLoading = (state) => authState(state).refreshLoading;
export const getError = (state) => authState(state).error;
export const getUserName = (state) => getUser(state).fullName;
export const getUserRoleCodes = (state) => getUser(state).role_kode;
