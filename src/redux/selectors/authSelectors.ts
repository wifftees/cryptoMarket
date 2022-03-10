import { RootState } from '../store/store'

export default function getUser(state: RootState) {
    return state.user
}
