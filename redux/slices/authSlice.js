import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../utils/constants';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout, authStart, authFailure } = authSlice.actions;

/**
 * LOGIN: Simulates login by checking if a user exists with the given credentials.
 * Method: GET (with filtering)
 */
export const loginUser = (credentials) => async (dispatch) => {
  dispatch(authStart());
  try {
    // Use local AsyncStorage for auth (development-friendly)
    const usersRaw = await AsyncStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const found = users.find(
      (u) => u.email === (credentials.email || '') && u.password === (credentials.password || '')
    );

    if (found) {
      await AsyncStorage.setItem('user', JSON.stringify(found));
      dispatch(loginSuccess(found));
      return { success: true };
    }

    // As requested: allow login with any email/password.
    // Create a session user on-the-fly (won't be added to registered users list).
    const sessionUser = {
      email: credentials.email || '',
      username: credentials.username || (credentials.email || '').split('@')[0] || 'Traveler',
    };
    await AsyncStorage.setItem('user', JSON.stringify(sessionUser));
    dispatch(loginSuccess(sessionUser));
    return { success: true };
  } catch (error) {
    dispatch(authFailure(error.message));
    return { success: false, error: error.message };
  }
};

/**
 * REGISTER: Creates a new user in the MockAPI database.
 * Method: POST
 */
export const registerUser = (userData) => async (dispatch) => {
  dispatch(authStart());
  try {
    // Normalize email and store user locally so any email can be registered
    const normalizedEmail = (userData.email || '').trim().toLowerCase();
    const payload = {
      username: userData.username || (normalizedEmail.split('@')[0] || 'Traveler'),
      email: normalizedEmail,
      password: userData.password || '',
    };

    const usersRaw = await AsyncStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    // As requested: allow registering any email — do not block duplicates.
    users.push(payload);
    await AsyncStorage.setItem('users', JSON.stringify(users));

    // Automatically log in after registration
    await AsyncStorage.setItem('user', JSON.stringify(payload));
    dispatch(loginSuccess(payload));
    return { success: true };
  } catch (error) {
    dispatch(authFailure(error.message));
    return { success: false, error: error.message };
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem('user');
    dispatch(logout());
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const userData = await AsyncStorage.getItem('user');
    if (userData !== null) {
      const parsedData = JSON.parse(userData);
      dispatch(loginSuccess(parsedData));
    }
  } catch (error) {
    console.error('Check auth error:', error);
  }
};

export default authSlice.reducer;