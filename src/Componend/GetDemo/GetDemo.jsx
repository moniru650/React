import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './GetDemo';

export default function GetDemo(){

  const [Mydata, setMydata] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res =>{
      setMydata(res?.data)
    }))
  }, [])

  return (
    <>
      <div className="grid">
        {Mydata?.map((item => {
          return (
            <div className="card">
              <h3>{item?.title}</h3>
              <p>{item?.body}</p>
            </div>
          )
        }))}
      </div>

    </>
  )
}
