import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './GetDemoStyle.css'



export default function GetDemo2(){

    const [Mydata, setMydata] = useState();
    useEffect(() => {
        axios.get("https://api.quotable.io/random").then((res => {
            setMydata(res?.data)
        }))


    }, [])
    const getinfo = () => {
        axios.get("https://api.quotable.io/random").then((res => {
            setMydata(res?.data)
        }));
    }

    return (
        <>
            <div className='grid'>
                <h1>Test</h1>
                <div className='card'>
                    <h3>{Mydata?.content}</h3>
                    <p>{Mydata?.author}</p>
                    <button onClick={getinfo}>click on</button>
                </div>

            </div>
            <h1>Helllo</h1>
        </>
    )
}

