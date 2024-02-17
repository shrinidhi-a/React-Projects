import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    // console.log(todos)
    
    return (
        <>
        {todos.map(todo => (
            <div key={todo.id} className='border-2 border-gray-300 p-2 rounded-lg w-96 flex justify-between items-center mt-5'>
                <p>{todo.text}</p>
                <button 
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-500 ease-in-out'
                >
                    Remove
                </button>
            </div>
        ))}
        </>
    )
}

export default Todos