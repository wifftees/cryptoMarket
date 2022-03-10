import { AxiosError } from 'axios'

export function isAxiosError(error: any): error is AxiosError {
    return (
        typeof error.response.status === 'number' &&
        typeof error.response.data.message === 'string'
    )
}
