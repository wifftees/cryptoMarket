import { createSlice } from '@reduxjs/toolkit'
import {
    writeUserToLocalStorage,
    deleteUserFromLocalStorage,
} from '../actions/userActions'

export type UserState = {
    user: boolean
}

const initialState: UserState = {
    user: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUserInLocalStorage(state) {
            state.user = true
        },
    },
    extraReducers: (builder) => {
        builder.addCase(writeUserToLocalStorage.fulfilled, (state) => {
            state.user = true
        })
        builder.addCase(deleteUserFromLocalStorage.fulfilled, (state) => {
            state.user = false
        })
    },
})

export default userSlice.reducer
