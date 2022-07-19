import { configureStore, createSlice } from "@reduxjs/toolkit";

let loginUserInfo = createSlice({
  name: "userInfo",
  initialState: "",
  reducers: {
    getLoginUserInfo(state, action) {
      return state = action.payload;
    },
  },
});

export default configureStore({
  reducer: {
    loginUserInfo: loginUserInfo.reducer,
  },
});
