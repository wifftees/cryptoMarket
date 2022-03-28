import React, { ReactNode } from 'react'
import styles from './remainSteps.module.scss'

type RemainStepsProps = {
    children: ReactNode
}

export default function RemainSteps({ children }: RemainStepsProps) {
    return (
        <div className={styles.remainSteps}>
            <h2 className={styles.title}>Remaining steps</h2>
            <div className={styles.steps}>{children}</div>
        </div>
    )
}
