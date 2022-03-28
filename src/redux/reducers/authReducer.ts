import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchError, SuccessfullResponseMessage } from '../../types/Api'
import { sendLoginValues, sendRegistrationValues } from '../actions/authActions'

type AuthState = {
    open: boolean
    email?: string
    isError: boolean
    title?: string
    message?: string
}

const initialState: AuthState = {
    open: false,
    isError: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        closeAuthState(state) {
            state.open = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                sendRegistrationValues.fulfilled.type,
                (state, action: PayloadAction<SuccessfullResponseMessage>) => {
                    state.open = true
                    state.title = 'Success'
                    state.message = action.payload.message
                }
            )
            .addCase(
                sendRegistrationValues.rejected.type,
                (state, action: PayloadAction<FetchError>) => {
                    state.open = true
                    state.isError = true
                    state.title = 'Error'
                    state.message = action.payload.message
                }
            )
            .addCase(
                sendLoginValues.fulfilled.type,
                (
                    state,
                    action: PayloadAction<
                        SuccessfullResponseMessage & { email: string }
                    >
                ) => {
                    state.open = true
                    state.email = action.payload.email
                    state.title = 'Success'
                    state.message = action.payload.message
                }
            )
            .addCase(
                sendLoginValues.rejected.type,
                (state, action: PayloadAction<FetchError>) => {
                    state.open = true
                    state.title = 'Error'
                    state.message = action.payload.message
                }
            )
    },
})

export default authSlice
