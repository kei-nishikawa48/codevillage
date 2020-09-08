import React, { useState } from 'react'
import firebase from "../config/firebase"

const SignUp = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")

  const em=document.getElementById("email")
  const pass=document.getElementById("password")
  const nm=document.getElementById("name")
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    em.value=""
    pass.value=""
    nm.value=""
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(({user})=>{
      user.updateProfile({
        displayName:name
      })
    })
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
        <div>

          <label htmlFor="name">Name</label>
          <input
            onChange={e=>{
              setName(e.target.value)
            }}
            name="name"
            type="name"
            id="name"
            placeholder="name"
            />
          </div>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp