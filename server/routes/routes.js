import express from 'express'
import { addTodo, fetchAllTodos, toggleTodo } from '../controller/todoController.js'

const route = express.Router()

route.post('/todos', addTodo)

route.get('/todos', fetchAllTodos)

route.get('/todos/:id', toggleTodo)

export default route