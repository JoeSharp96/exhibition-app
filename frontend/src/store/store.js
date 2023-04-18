import { configureStore } from '@reduxjs/toolkit';
import loggedInReducer from './loggedIn';

export default configureStore({
    reducer: {
        loggedIn: loggedInReducer,
    }
});