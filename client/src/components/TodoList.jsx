import React, { useEffect, useState } from 'react'
import { fetchAllTodos, selectAllTodos, selectIsLoading } from '../features/todos/todoSlice'
import { selectAllTabs, selectActiveTab } from '../features/tabs/tabSlice'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import Tabs from './Tabs'

const TodoList = () => {

    const dispatch = useDispatch()
    const allTodos = useSelector(selectAllTodos)
    const isLoading = useSelector(selectIsLoading)
    
    const allTabs = useSelector(selectAllTabs)
    const activeTab = useSelector(selectActiveTab)

    useEffect(() => {
        dispatch(fetchAllTodos())
    }, [])
  
    const getActiveTabData = () => {
      if (activeTab === "All") {
        return allTodos
      }
      else if (activeTab === "Pending") {
        return allTodos.filter(todo => todo.done === false)
      }
      else if (activeTab === "Done") {
        return allTodos.filter(todo => todo.done === true)
      }
    }

  return (
    <>
      <Tabs />
      <div className='todo-list'>
        {
          allTodos && !isLoading ?
          <ul>
              {getActiveTabData().map(todo => {
                  return (
                      <Todo key={todo._id} todo={todo} />
                  )
              })}
          </ul>
          :
          <h2>No todos</h2>
        }
      </div>
    </>
  )
}

export default TodoList
