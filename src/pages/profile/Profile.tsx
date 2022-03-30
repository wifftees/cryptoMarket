import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './profile.module.scss'
import StepDisplay from '../../components/profile-components/step-display/StepDisplay'
import Watchlist from '../../components/profile-components/watchlist/Watchlist'
import { currentUserExists } from '../../services/auth.service'

export default function Profile() {
    const history = useNavigate()
    const isUser = currentUserExists()

    useEffect(() => {
        if (!isUser) {
            history('/login')
        }
    })

    if (!isUser) {
        return <h1>Access denied</h1>
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
