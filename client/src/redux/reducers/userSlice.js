// In Redux Toolkit, a slice represents a portion of the Redux state and includes both the state and the reducers to update that state. A user slice typically manages the state related to a "user," such as their profile information, authentication status, preferences, or any other user-related data.
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   currentUser: null,
// };

export const userSlice = createSlice({
  name: "user",
  initialState:{currentUser:null},
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("befit-app-token", action.payload.token);
      console.log("Updating currentUser:", action.payload);
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("befit-app-token");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
