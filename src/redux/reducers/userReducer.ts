import { createSlice } from '@reduxjs/toolkit'
import {
    writeUserToLocalStorage,
    deleteUserFromLocalStorage,
} from '../actions/userActions'

export type UserState = {
    isUser: boolean
}

const initialState: UserState = {
    isUser: false,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUserInLocalStorage(state) {
            state.isUser = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(writeUserToLocalStorage.fulfilled, (state) => {
                state.isUser = true
            })
            .addCase(deleteUserFromLocalStorage.fulfilled, (state) => {
                state.isUser = false
            })
    },
})

export default userSlice
