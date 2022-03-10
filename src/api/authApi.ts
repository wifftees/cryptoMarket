import axios, { AxiosRequestConfig } from 'axios'
import { isAxiosError } from '../helpers/checkErrors'
import { RegisterFormValues, LoginFormValues } from '../types/User'
import { BASE_URL } from '../constants/baseUrl'

type RegisterRequestValues = Omit<RegisterFormValues, 'confirm'>

type LoginRequestValues = LoginFormValues

export const sendRegistrationValues = async (values: RegisterRequestValues) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/register`,
            values as AxiosRequestConfig<RegisterRequestValues>
        )
        return response.data
    } catch (error: any) {
        if (isAxiosError(error)) {
            return error.response?.data
        }
        return { error: 500, message: 'Unknown error' }
    }
}

export const sendLoginValues = async (values: LoginRequestValues) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/login`,
            values as AxiosRequestConfig<LoginRequestValues>
        )
        return response.data
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data
        }
        return { error: 500, message: 'Unknown error' }
    }
}
