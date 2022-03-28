import React from 'react'
import { Alert, AlertTitle } from '@mui/material'
import styles from './error.module.scss'

export default function Error() {
    return (
        <div className={styles.container}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Sorry, something went wrong
            </Alert>
        </div>
    )
}
