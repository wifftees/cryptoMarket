import React from 'react'
import Star from '../../common/star/Star'
import styles from './emptyTokenBox.module.scss'

export default function EmptyTokenBox() {
    return (
        <tr className={styles.token}>
            <td>
                <div className={styles.name} />
            </td>
            <td>
                <div className={styles.marketCap} />
            </td>
            <td>
                <div className={styles.volume} />
            </td>
            <td>
                <div className={styles.price} />
            </td>
            <td>
                <div className={styles.change} />
            </td>
            <td>
                <div className={styles.action}>
                    <Star handleClick={() => {}} enabled={false} />
                </div>
            </td>
        </tr>
    )
}
