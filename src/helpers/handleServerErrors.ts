import { FetchError } from '../types/Api'
import { isMockServerError } from './checkErrors'

export const handleServerErrors = (error: unknown): FetchError => {
    if (isMockServerError(error)) {
        const { data, status } = error.response
        return {
            status,
            message: data.message,
        }
    }
    return { status: 500, message: 'Unexpected error' }
}
