import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/baseUrl'
import { getCurrentUser } from '../services/auth.service'
import { WatchlistToken } from '../types/Token'

export const wathlistAPI = createApi({
    reducerPath: 'watchlistAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Watchlist'],
    endpoints: (build) => ({
        fetchUserWatchlist: build.query<WatchlistToken[], string>({
            query: () => ({
                url: '/get-user-watchlist',
                params: {
                    currentUser: getCurrentUser(),
                },
            }),
            providesTags: (result) => ['Watchlist'],
        }),
        fetchWatchlistToken: build.query<WatchlistToken, string>({
            query: (name) => ({
                url: '/get-watchlist-token',
                params: {
                    currentUser: getCurrentUser(),
                    name,
                },
            }),
            providesTags: (result) => ['Watchlist'],
        }),
        deleteWatchlistToken: build.mutation<WatchlistToken, string>({
            query: (id) => ({
                url: `/remove-watchlist-token`,
                method: 'POST',
                body: { id },
                params: {
                    currentUser: getCurrentUser(),
                },
            }),
            invalidatesTags: ['Watchlist'],
        }),
        addWatchlistToken: build.mutation<WatchlistToken, string>({
            query: (id) => ({
                url: `/add-watchlist-token`,
                method: 'POST',
                body: { id },
                params: {
                    currentUser: getCurrentUser(),
                },
            }),
            invalidatesTags: ['Watchlist'],
        }),
    }),
})

export const {
    useFetchUserWatchlistQuery,
    useDeleteWatchlistTokenMutation,
    useAddWatchlistTokenMutation,
    useFetchWatchlistTokenQuery,
} = wathlistAPI
