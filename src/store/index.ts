import { configureStore } from '@reduxjs/toolkit'
import configReducer from './config/configSlice'
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer: {
        config: configReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;