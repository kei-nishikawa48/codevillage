import React, { useState } from 'react'
import firebase from "../config/firebase"

const SignUp = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const em=document.getElementById("email")
  const pass=document.getElementById("password")
 
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    em.value=""
    pass.value=""
    firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(err=>{
          console.log(err)  
        })
 
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input
            onChange={e => {
              setEmail(e.target.value)
            }}
            name='email'
            type='email'
            id='email'
            placeholder='Email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={e => {
              setPassword(e.target.value)
            }}
            name='password'
            type='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp