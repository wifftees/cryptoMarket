import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
import { FetchError, SuccessfullResponseMessage } from '../../types/Api'
import { LoginFormValues, RegisterFormValues } from '../../types/User'

type RegisterRequestValues = Omit<RegisterFormValues, 'confirm'>

const AuthActions = {
    SEND_REGISTRATION_VALUES: 'user/sendRegistrationValues',
    SEND_LOGIN_VALUES: 'user/sendLoginValues',
}

export const sendRegistrationValues = createAsyncThunk<
    SuccessfullResponseMessage,
    RegisterRequestValues,
    {
        rejectValue: FetchError
    }
>(AuthActions.SEND_REGISTRATION_VALUES, async (values, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, values)
        return response.data
    } catch (e: any) {
        const error: AxiosError<{ message: string }> = e
        if (!error.response) {
            throw e
        }
        const { data, status } = error.response
        return rejectWithValue({ ...data, status })
    }
})

export const sendLoginValues = createAsyncThunk<
    SuccessfullResponseMessage,
    LoginFormValues,
    { rejectValue: FetchError }
>(AuthActions.SEND_LOGIN_VALUES, async (values, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, values)
        return { ...response.data, email: values.email }
    } catch (e: any) {
        const error: AxiosError<{ message: string }> = e
        if (!error.response) {
            throw e
        }
        const { data, status } = error.response
        return rejectWithValue({ ...data, status })
    }
})
