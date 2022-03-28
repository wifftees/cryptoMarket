import { WatchlistToken } from '../types/Token'

export const countTotalAmount = (tokens: WatchlistToken[]) => {
    return tokens.reduce(
        (amount, { currentPrice }) => amount + Number(currentPrice),
        0
    )
}
