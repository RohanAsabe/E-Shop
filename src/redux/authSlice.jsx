import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
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
=======
const initialState = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
        },
        logout(state) {
            state.user = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
