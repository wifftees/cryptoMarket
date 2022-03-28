export type FetchError = {
    status: number
    message: string
}

export type MockServerError = {
    response: {
        data: {
            message: string
        }
        status: number
    }
}

export type SuccessfullResponseMessage = {
    message: string
}
