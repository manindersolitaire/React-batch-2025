// The UseEffect Hook allows you to perform side effects in your components
// - fetching data from API
// - Directly updating the DOM
// - Timers

// useRef is a react hook that allow us to create mutable variables, which will not re-render the component


// useCallBack is a react hook that lets you cache a function definition b/w re-renders
// it means, when we use the useCallback hook, it doesn't create multiple instance of same function 
import { useEffect, useState , useRef, useCallback} from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 

  const [count,setCount] =  useState(0)

  const newFn =  useCallback(()=>{
      console.log("Hello") 
  },[])

 return (
    <>
      <Navbar newFn= {newFn}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev => prev+1)}>Click Here</button>
    </>
 )

}

export default App
