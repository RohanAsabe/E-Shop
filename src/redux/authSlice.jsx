import { createSlice } from "@reduxjs/toolkit";

// load saved user from localStorage on app start
const initialState = {
  user: localStorage.getItem("userEmail")
    ? { email: localStorage.getItem("userEmail") }
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;

      // save to localStorage
      localStorage.setItem("userEmail", action.payload.email);
      localStorage.setItem("isLoggedIn", "true");
    },

    logout(state) {
      state.user = null;

      // clear storage
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
