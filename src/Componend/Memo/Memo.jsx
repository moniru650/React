import React, { useState } from 'react'
import Example from './Example'

export default function Memo(){
 

const[count,setCount]=useState(0)
const[child,setChild]=useState(100)
function increment(){
  setCount(count+1)
}

function decrement(){
  setChild(child-1)
}


return(
  <>
  <h1>hello devololper {count} </h1>
  <button onClick={increment}>increment</button>
  <br />
  <br />
  <button onClick={decrement} >decrement</button>
  <Example value={child} />
  </>
)
}
