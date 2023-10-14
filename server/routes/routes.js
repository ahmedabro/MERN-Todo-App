import express from 'express'
import { addTodo, fetchAllTodos, toggleTodo, deleteTodo, updateTodo } from '../controller/todoController.js'

const route = express.Router()

route.post('/todos', addTodo)

route.get('/todos', fetchAllTodos)

route.get('/todos/:id', toggleTodo)

route.delete('/todos/:id', deleteTodo)

route.put('/todos/:id', updateTodo)

export default route