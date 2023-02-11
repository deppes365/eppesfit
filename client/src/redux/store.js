import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/appSlice'
import userReducer from './user/userSlice';
import notificationReducer from './notification/notificationSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    notification: notificationReducer
  },
})