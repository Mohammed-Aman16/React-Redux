import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from './Redux/Slice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <div>
    <button onClick={() => dispatch(decrement())}>-</button>
    <h1>The initial count is {count}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    </div>
    </>
  )
}

export default App
