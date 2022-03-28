import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/baseUrl'
import { Token } from '../types/Token'

export const tokenAPI = createApi({
    reducerPath: 'tokenAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        fetchToken: build.query<Token, string>({
            query: (name) => ({
                url: '/get-token',
                params: {
                    name,
                },
            }),
        }),
    }),
})

export const { useFetchTokenQuery } = tokenAPI
