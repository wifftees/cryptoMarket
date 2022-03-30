import React from 'react'
import { MarketToken, WatchlistToken } from '../../../types/Token'
import EmptyTokenBox from '../../tokens/token/EmptyTokenBox'
import TokenBox from '../../tokens/token/TokenBox'
import styles from './marketTable.module.scss'

type MarketTableProps = {
    marketList: MarketToken[] | undefined
    watchListTokens: WatchlistToken[] | undefined
    isFetching: boolean
    isLoading: boolean
}

export default function MarketTable({
    marketList,
    watchListTokens,
    isFetching,
    isLoading,
}: MarketTableProps) {
    const defineEnabledProp = (id: string) =>
        watchListTokens
            ? Boolean(watchListTokens.find((token) => token.id === id))
            : false

    return marketList?.length ? (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <td className={styles.name}>Name</td>
                    <td className={styles.marketCap}>Market Cap</td>
                    <td className={styles.volume}>Volume</td>
                    <td className={styles.price}>Price</td>
                    <td className={styles.change}>Change</td>
                    <td className={styles.action}>Add in watchlist</td>
                </tr>
            </thead>
            <tbody>
                {marketList && !isFetching && !isLoading ? (
                    marketList.map((token) => (
                        <TokenBox
                            key={token.id}
                            id={token.id}
                            name={token.name}
                            marketCap={token.marketCap}
                            volume={token.volume}
                            currentPrice={token.currentPrice}
                            change={token.change}
                            enabled={defineEnabledProp(token.id)}
                            noEffect={!watchListTokens}
                        />
                    ))
                ) : (
                    <>
                        <EmptyTokenBox />
                        <EmptyTokenBox />
                        <EmptyTokenBox />
                    </>
                )}
            </tbody>
        </table>
    ) : (
        <div className={styles.empty}>
            <h1>No token met conditions</h1>
        </div>
    )
}
