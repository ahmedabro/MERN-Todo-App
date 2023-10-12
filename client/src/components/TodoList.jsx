import React, { useEffect, useState } from 'react'
import { fetchAllTodos, selectAllTodos, selectIsLoading } from '../features/todos/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {

    const dispatch = useDispatch()
    const allTodos = useSelector(selectAllTodos)
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(fetchAllTodos())
    }, [])

  return (
    <div className='todo-list'>
      {
        allTodos && !isLoading ?
        <ul>
            {allTodos.map(todo => {
                return (
                    <Todo key={todo._id} todo={todo} />
                )
            })}
        </ul>
        :
        <h2>No todos</h2>
      }
    </div>
  )
}

export default TodoList
