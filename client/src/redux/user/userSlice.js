import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
    lastName: '',
    email: '',
    username: '',
    sex: '',
    uid: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
        setUser: (state, action) => ({
            ...state,
            ...action.payload
        }),
        resetUserState: () => ({
            ...initialState
        })
    },
});

export const { setUser, resetUserState } = userSlice.actions;

export default userSlice.reducer;