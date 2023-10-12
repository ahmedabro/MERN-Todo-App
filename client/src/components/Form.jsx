import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

const Form = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(text)
        dispatch(addTodo(text))
        setText('')
    }
  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder='Enter to do task...' />
      </form>
    </div>
  )
}

export default Form
