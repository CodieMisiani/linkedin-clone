// src/store/redux.js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // Store the user object here
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Set the user data
    },
    logout: (state) => {
      state.user = null; // Clear user data
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;

// Create a selector function to access the user state
export const selectUser = (state) => state.user.user;

const store = configureStore({
  reducer: {
    user: userSlice.reducer, // This reducer handles the user state
  },
});

export default store;
