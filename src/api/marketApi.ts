import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/baseUrl'
import { FilterFormOutput } from '../constants/defaultFilterConfig'
import { MarketToken } from '../types/Token'

type FetchTokenListArguments = {
    searchTerm: string
    tagTerm: string
    filterTerm: FilterFormOutput
}

export const marketAPI = createApi({
    reducerPath: 'marketAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Tokens'],
    endpoints: (build) => ({
        fetchMarketList: build.query<MarketToken[], FetchTokenListArguments>({
            query: ({ searchTerm, tagTerm, filterTerm }) => ({
                url: '/get-market-list',
                params: {
                    searchTerm,
                    tagTerm,
                    filterTerm: JSON.stringify(filterTerm),
                },
            }),
            providesTags: (result) => ['Tokens'],
        }),
    }),
})

export const { useFetchMarketListQuery } = marketAPI
