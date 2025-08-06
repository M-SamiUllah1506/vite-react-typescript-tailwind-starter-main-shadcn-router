import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/appSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
