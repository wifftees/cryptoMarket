import React from 'react'
import { CircularProgress } from '@mui/material'
import Border from '../../common/border/Border'
import styles from './watchList.module.scss'
import WatchlistTokenBox from '../../tokens/watchlist-token/WatchlistToken'
import { useFetchUserWatchlistQuery } from '../../../api/watchlistApi'
import { countTotalAmount } from '../../../helpers/countTotalAmount'

export default function Watchlist() {
    const { data: tokens, isLoading, error } = useFetchUserWatchlistQuery()
    if (isLoading) {
        return <CircularProgress />
    }

    if (error || !tokens) {
        return <h1>Sorry we can not load data from a server</h1>
    }

    const totalAmount = tokens.length ? countTotalAmount(tokens) : 0
    return (
        <>
            <div className={styles.header}>
                <h1>Watchlist</h1>
                <h1>{`${totalAmount} USD`}</h1>
            </div>
            <Border />
            {tokens.length ? (
                <div className={styles.list}>
                    <div className={styles.title}>
                        <h3>Name</h3>
                        <div className={styles.propsNames}>
                            <div className={styles.tokenPropsNames}>
                                <h3>Price</h3>
                                <h3>Change</h3>
                            </div>
                            <h3>Favorite</h3>
                        </div>
                    </div>
                    {tokens.map((token) => (
                        <WatchlistTokenBox
                            key={token.id}
                            id={token.id}
                            name={token.name}
                            currentPrice={token.currentPrice}
                            change={token.change}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    <h1>Start building your watchlist</h1>
                </div>
            )}
        </>
    )
}
