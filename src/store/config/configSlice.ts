import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AvailableLanguages } from '@/types/Language'

interface ConfigState {
  lang: AvailableLanguages;
  loaded: boolean;
}


const initialState: ConfigState = {
	lang: 'pt',
	loaded: false
}

const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		setLang: (state, action: PayloadAction<string>) => {
			state.lang = action.payload as AvailableLanguages
		},
		setLoaded: (state, action: PayloadAction<boolean>) => {
			state.loaded = action.payload
		}
	}
})

export const { setLang, setLoaded } = configSlice.actions
export default configSlice.reducer
