import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {User} from "@/types/User";

interface UserState {
    user: User | null;
}


const initialState: UserState = {
    user: null
}

const userSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        initializeUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { initializeUser, logout } = userSlice.actions
export default userSlice.reducer
