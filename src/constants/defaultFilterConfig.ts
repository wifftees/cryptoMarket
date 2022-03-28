export type FilterFormOutput = {
    price: {
        from: number
        to: number
    }
    volume: {
        from: number
        to: number
    }
    tradable: boolean
    // watchlist: {
    //     inWatchlist: boolean
    //     notInWatchlist: boolean
    // }
}

export const defaultFilterConfig: FilterFormOutput = {
    price: {
        from: 0,
        to: 10000,
    },
    volume: {
        from: 0,
        to: 10000000,
    },
    tradable: true,
    // watchlist: {
    //     inWatchlist: true,
    //     notInWatchlist: true,
    // },
}
