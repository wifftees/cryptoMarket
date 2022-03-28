import { UserSteps } from '../types/User'

export const getCompletedSteps = (description: string): UserSteps => {
    return {
        profileStep: true,
        descriptionStep: Boolean(description.length),
    }
}

export const countCompletedSteps = (steps: UserSteps) =>
    Object.entries(steps).reduce((count, [step, value]) => {
        if (value) count += 1
        return count
    }, 0)
