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
		editCrud: (state, action: PayloadAction<Crud>) => {
			const index = state.cruds.findIndex(crud => crud._id === action.payload._id)
			state.cruds[index] = action.payload
		},
		initializeCrudList: (state, action: PayloadAction<Crud[]>) => {
			state.cruds = action.payload
		}
	}
})

export const { addCrud, initializeCrudList, editCrud } = crudSlice.actions
export default crudSlice.reducer
