import React from 'react'
import styles from './stepDisplay.module.scss'

export type StepDisplayProps = {
    step: {
        stepNumber: number
        stepName: string
    }
}

export default function StepDisplay({ step }: StepDisplayProps) {
    const { stepNumber, stepName } = step
    const filledWidth = stepNumber * 200
    return (
        <div className={styles.container}>
            <div className={styles.stepText}>
                <div className={styles.stepNumber}>{`${stepNumber} step`}</div>
                <div className={styles.stepName}>{stepName}</div>
            </div>
            <div className={styles.progress}>
                <div className={styles.bar}>
                    <div className={styles.empty}>
                        <div
                            className={styles.filled}
                            style={{ width: `${filledWidth}px` }}
                        />
                    </div>
                </div>
                <div className={styles.completedSteps}>{`${stepNumber}/3`}</div>
            </div>
        </div>
    )
}
