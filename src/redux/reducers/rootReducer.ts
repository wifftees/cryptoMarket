import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'

const reducers = {
    user: userReducer,
}

const rootReducer = combineReducers({
    ...reducers,
})

export default rootReducer
