import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	darkTheme: false,
    loggedIn: true,
    imperialSystem: true
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
        setDarkTheme: (state) => {
            state.darkTheme = !state.darkTheme
        },
        setMeasurementSystem: (state) => {
            state.imperialSystem = !state.imperialSystem
            
        }
    },
});

export const { setDarkTheme, setMeasurementSystem } = appSlice.actions;

export default appSlice.reducer;
