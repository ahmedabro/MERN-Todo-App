import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'
import tabReducer from '../features/tabs/tabSlice'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        tabs: tabReducer,
    },
})
