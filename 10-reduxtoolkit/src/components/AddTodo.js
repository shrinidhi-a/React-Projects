import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input 
            className='border-2 border-gray-300 p-2 rounded-lg w-96 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out'
            type="text" 
            placeholder='Add a todo...'
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
        />
        <button 
        className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-500 ease-in-out'
            type="submit"
        >
            Add
        </button>
    </form>
  )
}

export default AddTodo