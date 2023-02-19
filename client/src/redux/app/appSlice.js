import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	darkTheme: false,
	imperialSystem: true,
	showSettings: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setDarkTheme: state => {
			state.darkTheme = !state.darkTheme;
		},
		setShowSettings: (state, action) => {
			if (action.payload === undefined || action.payload === null) {
				state.showSettings = !state.showSettings;
				return;
			}

			state.showSettings = action.payload;
		},
		setMeasurementSystem: state =>
			(state.imperialSystem = !state.imperialSystem),

		resetAppState: () => ({
			...initialState,
		}),
	},
});

export const {
	setDarkTheme,
	setMeasurementSystem,
	setShowSettings,
	resetAppState,
} = appSlice.actions;

export default appSlice.reducer;
