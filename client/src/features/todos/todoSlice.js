import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = "http://localhost:8000"

export const addTodo = createAsyncThunk('addTodo', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/todos`, { data })
        return response
    } catch (error) {
        return rejectWithValue("Error while calling addTodo API", error)
    }
}) 

export const fetchAllTodos = createAsyncThunk('fetchAllTodos', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/todos`)
        return response
    } catch (error) {
        return rejectWithValue("Error while calling fetchAllTodos API", error)
    }
})

export const toggleTodo = createAsyncThunk('toggleTodo', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/todos/${id}`)
        return response
    } catch (error) {
        return rejectWithValue("Error while calling toggleTodo API", error)
    }
})

export const deleteTodo = createAsyncThunk('deleteTodo', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${API_URL}/todos/${id}`)
        return response
    } catch (error) {
        return rejectWithValue("Error while calling deleteTodo API", error)
    }
})

export const updateTodo = createAsyncThunk('updateTodo', async ({id, data}, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${API_URL}/todos/${id}`, { data })
        return response
    } catch (error) {
        return rejectWithValue("Error while calling deleteTodo API", error)
    }
})

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        isLoading: false,
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(addTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos.push(action.payload.data)
        })
        builder.addCase(addTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(fetchAllTodos.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos = action.payload.data
        })
        builder.addCase(fetchAllTodos.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(toggleTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(toggleTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos = state.todos.map(todo => (
                todo._id === action.payload.data._id ? {...todo, done: !todo.done} : todo
            ))
        })
        builder.addCase(toggleTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(deleteTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos = state.todos.filter(todo => (
                todo._id !== action.payload.data._id
            ))
        })
        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(updateTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos = state.todos.map(todo => (
                todo._id === action.payload.data._id ? {...todo, data: action.payload.data.data} : todo
            ))
            console.log(action.payload.data.data)

        })
        builder.addCase(updateTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})


export const selectAllTodos = (state) => state.todos.todos

export const selectIsLoading = (state) => state.todos.isLoading

export const selectError = (state) => state.todos.error

// export const { addText } = todoSlice.actions

export default todoSlice.reducer