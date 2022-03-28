import React from 'react'
import { useNavigate } from 'react-router'
import styles from './profile.module.scss'
import StepDisplay from '../../components/profile-components/step-display/StepDisplay'
import Watchlist from '../../components/profile-components/watchlist/Watchlist'
import { useAppSelector } from '../../hooks/redux'
import { getUser } from '../../redux/selectors/userSelectors'

export default function Profile() {
    const history = useNavigate()
    const { isUser } = useAppSelector(getUser)

    if (!isUser) {
        history('/login')
    }

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <StepDisplay />
            </div>
            <div className={styles.container}>
                <Watchlist />
            </div>
        </div>
    )
}
