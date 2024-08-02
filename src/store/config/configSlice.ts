import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AvailableLanguages } from '@/types/Language'

interface ConfigState {
  lang: AvailableLanguages;
}


const initialState: ConfigState = {
	lang: 'pt'
}

const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		setLang: (state, action: PayloadAction<string>) => {
			state.lang = action.payload as AvailableLanguages
		}
	}
})

export const { setLang } = configSlice.actions
export default configSlice.reducer
