import React, { useState } from 'react'
import { format } from 'date-fns'
import { FaPenToSquare, FaTrash, FaCheck } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../features/todos/todoSlice'

const Todo = ({ todo }) => {
    
  const dispatch = useDispatch()
  const [editEnabled, setEditEnabled] = useState(false)
  const [textVal, setTextVal] = useState(todo.data)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditEnabled(!editEnabled)
    dispatch(updateTodo({
      id: todo._id,
      data: textVal
    }))
  }

  return (
    <li className='todo-box'>
          {
            editEnabled ? 
            <form onSubmit={handleSubmit}>
              <input type='text' value={textVal} onChange={(e) => setTextVal(e.target.value)} />
            </form> 
            : 
            <span onClick={() => dispatch(toggleTodo(todo._id))}>
              {todo.data} <span className='date'>{ format(new Date(todo.createdAt), 'MMMM do yyyy, h:mm:ss a') }</span>
            </span>
          }
          <FaPenToSquare onClick={() => setEditEnabled(!editEnabled)} />
          <FaTrash onClick={() => dispatch(deleteTodo(todo._id))} />
          {todo.done === true ? <FaCheck className='done-check' /> : ''}
    </li>
  )
}

export default Todo
