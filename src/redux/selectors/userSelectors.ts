import { RootState } from '../store/store'

export const getUser = (state: RootState) => {
    return state.user
}
