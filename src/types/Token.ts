type PeriodPriceValue = {
    timestamp: string
    price: number
}

type Tags = {
    new: boolean
    hot: boolean
    popular: boolean
}

export type Token = {
    id: string
    name: string
    nameSymbol: string
    currentPrice: number
    dayPrice: PeriodPriceValue[]
    weekPrice: PeriodPriceValue[]
    monthPrice: PeriodPriceValue[]
    marketCap: number
    volume: number
    change: number
    tags: Tags
    tradable: boolean
}

export type MarketToken = Omit<
    Token,
    'dayPrice' | 'weekPrice' | 'monthPrice' | 'nameSymbol'
>

export type WatchlistToken = Omit<
    Token,
    | 'marketCap'
    | 'volume'
    | 'dayPrice'
    | 'weekPrice'
    | 'monthPrice'
    | 'tags'
    | 'nameSymbol'
    | 'tradable'
>
