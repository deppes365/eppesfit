import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	darkTheme: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
        setDarkTheme: (state, action) => {
            state.darkTheme = !state.darkTheme
        }
    },
});

export const { setDarkTheme } = appSlice.actions;

export default appSlice.reducer;
