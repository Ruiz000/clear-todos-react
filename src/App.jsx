import './App.css'
import { useState, useEffect } from 'react'
import TodoList from './components/todoList'


function App() {

  return (
    <>
      <h1 className='text-white text-5xl leading-normal m-5 '>Todo</h1>
      <TodoList/>
    </>
  )
}

export default App
