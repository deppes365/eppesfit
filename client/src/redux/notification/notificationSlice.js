import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	message: 'Message',
    error: null,
    showNotification: false
};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
        notify: (state, action) => {
            state.showNotification = false
            state.message = action.payload.message
            state.error = action.payload.error
            state.showNotification = true
        },
        resetNotification: (state) => {
              state.message = ''
              state.error = null
              state.showNotification = false  
        }
    },
});

export const { notify, resetNotification } = notificationSlice.actions;

export default notificationSlice.reducer;