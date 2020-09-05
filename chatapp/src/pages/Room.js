import React, {useState ,useEffect} from 'react'
import firebase from "../config/firebase"
import "firebase/firestore"

const Room = () => {
  const [messages, setMessages]=useState(null)
  const [value,setValue]=useState("")

  useEffect(()=>{
    firebase.firestore().collection('messages')
    .onSnapshot((snapshot)=>{
      const messages = snapshot.docs.map((doc)=>{
        return doc.data()
      })
      setMessages(messages)
    })
  },[])


  return (
    <>
      <h1>Room</h1>
      <ul>
        <li>
          
        </li>
      </ul>
      <form>
        <input 
          type="text"
          onchange={e=>
            setValue(e.target.value)}
          value={value}
          />
          <button type="submit">送信</button>
      </form>
      <button onClick={()=>firebase.auth().signOut()}>Logout</button>

    </>
  )
}

export default Room