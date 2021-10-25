import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../slices/loading'

export default store = configureStore({
    reducer: {
        loadingReducer,
    }
})