import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/baseUrl'
import { getCurrentUser } from '../services/auth.service'
import { UserProfileData } from '../types/User'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchUserData: build.query<UserProfileData, void>({
            query: () => ({
                url: '/get-user-data',
                params: {
                    currentUser: getCurrentUser(),
                },
            }),
            providesTags: (result) => ['User'],
        }),
        updateUserDescription: build.mutation<string, string>({
            query: (description) => ({
                url: '/update-user-description',
                method: 'POST',
                body: description,
                params: {
                    currentUser: getCurrentUser(),
                },
            }),
            invalidatesTags: ['User'],
        }),
    }),
})

export const { useFetchUserDataQuery, useUpdateUserDescriptionMutation } =
    userAPI
