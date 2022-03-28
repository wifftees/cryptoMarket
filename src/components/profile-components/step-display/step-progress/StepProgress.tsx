import React from 'react'
import styles from './stepProgress.module.scss'

export type StepProgressProps = {
    step: number
    firstName: string
    secondName: string
}

export default function StepProgress({
    step,
    firstName,
    secondName,
}: StepProgressProps) {
    const filledWidth = step * 300
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.avatar} />
                <div className={styles.stepText}>
                    <div className={styles.stepNumber}>{`${step} step`}</div>
                    <div className={styles.stepName}>
                        {`Welcome ${firstName} ${secondName}`}
                    </div>
                </div>
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
                <div className={styles.completedSteps}>{`${step}/2`}</div>
            </div>
        </div>
    )
}
