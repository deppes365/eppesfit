import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: 'Darren',
    lastName: 'Eppes',
    email: 'deppes365@gmail.com',
    username: 'deppes365',
    sex: 'male'
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
        
    },
});

export const {  } = userSlice.actions;

export default userSlice.reducer;