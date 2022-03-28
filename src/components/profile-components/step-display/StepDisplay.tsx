import React from 'react'
import { CircularProgress } from '@mui/material'
import Border from '../../common/border/Border'
import RemainSteps from './remain-steps/RemainSteps'
import StepProgress from './step-progress/StepProgress'
import DescriptionStep from './steps/description-step/DescriptionStep'
import ProfileStep from './steps/profile-step/ProfileStep'
import {
    countCompletedSteps,
    getCompletedSteps,
} from '../../../helpers/stepsHelpers'
import { useFetchUserDataQuery } from '../../../api/userApi'

export default function StepDisplay() {
    const { data: userData, isLoading, error } = useFetchUserDataQuery()

    if (isLoading || !userData) {
        return <CircularProgress />
    }

    if (error) {
        return <h1>Sorry we can not load data from a server</h1>
    }

    const { firstName, secondName, description } = userData
    const steps = getCompletedSteps(description)
    const { profileStep, descriptionStep } = steps
    const currentStep = countCompletedSteps(steps)

    return (
        <>
            <StepProgress
                step={currentStep}
                firstName={firstName}
                secondName={secondName}
            />
            <Border />
            <RemainSteps>
                <ProfileStep completedStep={profileStep} />
                <DescriptionStep completedStep={descriptionStep} />
            </RemainSteps>
        </>
    )
}
