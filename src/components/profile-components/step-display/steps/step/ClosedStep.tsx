import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import styles from './closedStep.module.scss'

type ClosedStepProps = {
    stepTitle: string
}

export default function ClosedStep({ stepTitle }: ClosedStepProps) {
    return (
        <div className={styles.step}>
            <div className={styles.closed}>
                <div className={styles.content}>
                    <div className={styles.done}>
                        <AiOutlineCheck className={styles.icon} />
                    </div>
                    <span className={styles.title}>{stepTitle}</span>
                </div>
            </div>
        </div>
    )
}
