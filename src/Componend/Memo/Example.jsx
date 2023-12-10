import React, { memo, useState } from 'react'


 function Example(props){
  console.log("Example render")
  
  return (
    <>
    <h1> example {props.value} </h1>
    </>
  )
}
export default memo(Example);

 




