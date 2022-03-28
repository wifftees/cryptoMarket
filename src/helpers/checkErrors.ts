import { FetchError, MockServerError } from '../types/Api'

export function isMockServerError(error: any): error is MockServerError {
    return (
        typeof error.response.status === 'number' &&
        typeof error.response.data.message === 'string'
    )
}

export function isFetchError(error: any): error is FetchError {
    return typeof error.status === 'number' && typeof error.message === 'string'
}
