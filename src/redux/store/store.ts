import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { marketAPI } from '../../api/marketApi'
import { tokenAPI } from '../../api/tokenApi'
import { userAPI } from '../../api/userApi'
import { wathlistAPI } from '../../api/watchlistApi'
import authSlice from '../reducers/authReducer'
import userSlice from '../reducers/userReducer'

const reducers = {
    user: userSlice.reducer,
    auth: authSlice.reducer,
    [wathlistAPI.reducerPath]: wathlistAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [marketAPI.reducerPath]: marketAPI.reducer,
    [tokenAPI.reducerPath]: tokenAPI.reducer,
}

const rootReducer = combineReducers({
    ...reducers,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            wathlistAPI.middleware,
            userAPI.middleware,
            marketAPI.middleware,
            tokenAPI.middleware
        ),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
