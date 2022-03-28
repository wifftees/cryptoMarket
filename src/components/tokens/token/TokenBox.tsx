import React from 'react'
import { useNavigate } from 'react-router'
import { capitalizeFirstLetter } from '../../../helpers/stringHelpers'
import { useToggleWatchlistEntry } from '../../../hooks/useToggleWatchlistEntry'
import { Token } from '../../../types/Token'
import Star from '../../common/star/Star'
import styles from './tokenBox.module.scss'

type TokenBoxProps = Omit<
    Token,
    'dayPrice' | 'weekPrice' | 'monthPrice' | 'tags' | 'nameSymbol' | 'tradable'
> & {
    enabled: boolean
}

export default function TokenBox({
    id,
    name,
    marketCap,
    volume,
    currentPrice,
    change,
    enabled,
}: TokenBoxProps) {
    const { handleToggling, isEnabled } = useToggleWatchlistEntry(id, enabled)
    const history = useNavigate()

    const hanleTokenClick = () => {
        history(`/market/${name}`)
    }

    return (
        <tr className={styles.token} onClick={hanleTokenClick}>
            <td>{capitalizeFirstLetter(name)}</td>
            <td className={styles.marketCap}>{marketCap}</td>
            <td className={styles.volume}>{volume}</td>
            <td className={styles.price}>{currentPrice}</td>
            <td className={styles.change}>{change}</td>
            <td className={styles.action}>
                <Star handleClick={handleToggling} enabled={isEnabled} />
            </td>
        </tr>
    )
}
