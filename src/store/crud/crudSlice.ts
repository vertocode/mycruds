import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Crud } from '@/types/Crud'

interface CrudState {
    cruds: Crud[];
}


const initialState: CrudState = {
	cruds: []
}

const crudSlice = createSlice({
	name: 'crud',
	initialState,
	reducers: {
		addCrud: (state, action: PayloadAction<Crud>) => {
			state.cruds.push(action.payload)
		},
		initializeCrudList: (state, action: PayloadAction<Crud[]>) => {
			state.cruds = action.payload
		}
	}
})

export const { addCrud, initializeCrudList } = crudSlice.actions
export default crudSlice.reducer
