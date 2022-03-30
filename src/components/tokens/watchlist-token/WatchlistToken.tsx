import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteWatchlistTokenMutation } from '../../../api/watchlistApi'
import { capitalizeFirstLetter } from '../../../helpers/stringHelpers'
import { WatchlistToken } from '../../../types/Token'
import Star from '../../common/star/Star'
import styles from './watchlistToken.module.scss'

type WatchlistTokenProps = WatchlistToken

export default function WatchlistTokenBox({
    id,
    name,
    currentPrice,
    change,
}: WatchlistTokenProps) {
    const [deleteWatchlistToken] = useDeleteWatchlistTokenMutation()
    const history = useNavigate()
    const hanleTokenClick = () => {
        history(`/market/${name}`)
    }
    const handleClickFavorite = async () => deleteWatchlistToken(id)
    return (
        <div className={styles.token} onClick={hanleTokenClick}>
            <div className={styles.name}>
                <div className={styles.avatar} />
                <h3>{capitalizeFirstLetter(name)}</h3>
            </div>
            <div className={styles.props}>
                <div className={styles.tokenProps}>
                    <h3>{currentPrice}</h3>
                    <h3>{`${change}%`}</h3>
                </div>
                <div className={styles.icon}>
                    <Star handleClick={handleClickFavorite} enabled />
                </div>
            </div>
        </div>
    )
}
