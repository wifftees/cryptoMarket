import React from 'react'
import ClosedStep from '../step/ClosedStep'
import styles from './profileStep.module.scss'

type ProfileStepProps = {
    completedStep: boolean
}

export default function ProfileStep({ completedStep }: ProfileStepProps) {
    return (
        <div className={styles.step}>
            <ClosedStep stepTitle="Create account" />
        </div>
    )
}
