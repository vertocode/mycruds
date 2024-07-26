import { configureStore } from '@reduxjs/toolkit'
import configReducer from './config/configSlice'
import userReducer from './user/userSlice'
import crudReducer from './crud/crudSlice'

export const store = configureStore({
	reducer: {
		config: configReducer,
		user: userReducer,
		crud: crudReducer
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;