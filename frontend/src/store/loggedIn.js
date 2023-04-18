import { createSlice } from '@reduxjs/toolkit';

export const loggedInSlice = createSlice({
    name: "loggedIn",
    initialState: {
        isLoggedIn: false
    },

    reducers: {
        loggedInToggle: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
});

export const {loggedInToggle} = loggedInSlice.actions;
export default loggedInSlice.reducer;