import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyB16BKiY0S-TsP1BrJGakSaywr3d1TKi94",
  authDomain: "chat-app-86c21.firebaseapp.com",
  databaseURL: "https://chat-app-86c21.firebaseio.com",
  projectId: "chat-app-86c21",
  storageBucket: "chat-app-86c21.appspot.com",
  messagingSenderId: "263497509839",
  appId: "1:263497509839:web:e161db0df359be539840ba"
}


firebase.initializeApp(firebaseConfig)

export default firebase