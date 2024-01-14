import { useState } from 'react'
import { io } from "socket.io-client";
import Login from './components/login'
import SignUp from './components/signup';
import './App.css'

function App() {

  // const socket = io('http://localhost:3000')

  // socket.on('connection', () => {
  //   console.log('connected')
  // });
  //socket.emit('Hello', 'hello world')

  return (
    <div>
      {/* <Login /> */}
      <SignUp />
    </div>
  )
}

export default App
