import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/baseUrl'
import { LoginFormValues, RegisterFormValues } from '../types/User'

type SuccessfullResponse<T> = {
    message: string
    values: T
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        sendRegisterFormValues: build.mutation<string, RegisterFormValues>({
            query: ({ firstName, secondName, email, password }) => ({
                url: '/register',
                method: 'POST',
                body: {
                    firstName,
                    secondName,
                    email,
                    password,
                },
            }),
            transformResponse: ({ message }: { message: string }) => message,
        }),
        sendLoginFormValues: build.mutation<
            SuccessfullResponse<LoginFormValues>,
            LoginFormValues
        >({
            query: ({ email, password }) => ({
                url: '/login',
                method: 'POST',
                body: {
                    email,
                    password,
                },
            }),
        }),
    }),
})

export const {
    useSendRegisterFormValuesMutation,
    useSendLoginFormValuesMutation,
} = authAPI
