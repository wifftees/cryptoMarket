import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useState } from 'react'
import { useFetchMarketListQuery } from '../../api/marketApi'
import { useFetchUserWatchlistQuery } from '../../api/watchlistApi'
import SearchBox from '../../components/common/search-box/SearchBox'
import FilterForm from '../../components/forms/filter-form/FilterForm'
import MarketTable from '../../components/market/market-table/MarketTable'
import Tags from '../../components/market/tags/Tags'
import {
    defaultFilterConfig,
    FilterFormOutput,
} from '../../constants/defaultFilterConfig'
import { currentUserExists } from '../../services/auth.service'
import styles from './market.module.scss'

export default function Market() {
    const isUser = currentUserExists()
    const [filterTerm, setFilterTerm] =
        useState<FilterFormOutput>(defaultFilterConfig)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [tagTerm, setTagTerm] = useState<string>('')

    const {
        data: marketList,
        error,
        isLoading,
        isFetching,
    } = useFetchMarketListQuery({ searchTerm, tagTerm, filterTerm })
    const { data: watchListTokens } = useFetchUserWatchlistQuery(
        isUser ? '' : skipToken
    )

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.tokenList}>
                    <div className={styles.header}>
                        <SearchBox setSearchTerm={setSearchTerm} />
                        <Tags setFilterTerm={setTagTerm} />
                    </div>
                    {error ? (
                        <h1>Sorry we can not load data from a server</h1>
                    ) : (
                        <MarketTable
                            marketList={marketList}
                            watchListTokens={watchListTokens}
                            isFetching={isFetching}
                            isLoading={isLoading}
                        />
                    )}
                </div>
                <FilterForm setFilterTerm={setFilterTerm} />
            </div>
        </div>
    )
}
