import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentUser, login, logout } from '../../services/auth.service'
import { BASE_URL } from '../../constants/baseUrl'
import { User } from '../../types/User'
import { handleServerErrors } from '../../helpers/handleServerErrors'

const UserActions = {
    WRITE_USER_TO_STORE: 'user/writeUserToStore',
    DELETE_USER_FROM_STORE: 'user/deleteUserFromStore',
    FETCH_USER_DATA: 'user/fetchUserData',
}

export const writeUserToLocalStorage = createAsyncThunk(
    UserActions.WRITE_USER_TO_STORE,
    (email: string) => {
        login(email)
    }
)

export const deleteUserFromLocalStorage = createAsyncThunk(
    UserActions.DELETE_USER_FROM_STORE,
    () => {
        logout()
    }
)

export const fetchUserData = createAsyncThunk(
    UserActions.FETCH_USER_DATA,
    async (_, thunkAPI) => {
        try {
            const currentUser = getCurrentUser()
            const response = await axios.get<User>(
                `${BASE_URL}/get-user-data?currentUser=${currentUser}`
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(handleServerErrors(error))
        }
    }
)
