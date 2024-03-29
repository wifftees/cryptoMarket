import { useState } from 'react'
import {
    useAddWatchlistTokenMutation,
    useDeleteWatchlistTokenMutation,
} from '../api/watchlistApi'

export const useToggleWatchlistEntry = (
    tokenId: string | undefined,
    initialState: boolean,
    noEffect = false
) => {
    const [isEnabled, setEnabled] = useState(initialState)
    const [addWatchlistToken] = useAddWatchlistTokenMutation()
    const [deleteWatchlistToken] = useDeleteWatchlistTokenMutation()

    if (!tokenId || noEffect)
        return {
            handleToggling: () => {},
            isEnabled: false,
        }
    const handleToggling = () => {
        if (isEnabled) {
            deleteWatchlistToken(tokenId)
            setEnabled(false)
        } else {
            addWatchlistToken(tokenId)
            setEnabled(true)
        }
    }
    return { handleToggling, isEnabled }
}
