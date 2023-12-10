
import React from 'react';
import {FirstName} from  '../Home/Home/Home';
import { LastName} from  '../Home/Home/Home';
import{useContext} from 'react'

export default function CompB(){

const firstname = useContext(FirstName);
const lastname = useContext(LastName);

  return(
    <>
      <h1>Hello {firstname} {lastname}.hope do you well</h1>
    </>
  )
}

