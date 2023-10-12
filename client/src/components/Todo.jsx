import React from 'react'
import { FaPenToSquare, FaTrash, FaCheck } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../features/todos/todoSlice'

const Todo = ({ todo }) => {
    
    const dispatch = useDispatch()

  return (
    <li className='todo-box'>
          <span onClick={() => dispatch(toggleTodo(todo._id))}>{todo.data}</span>
          <FaPenToSquare />
          <FaTrash />
          {todo.done === true ? <FaCheck className='done-check' /> : ''}
    </li>
  )
}

export default Todo
