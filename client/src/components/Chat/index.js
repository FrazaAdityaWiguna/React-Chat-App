import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom'
import './chat.css'
import InfoBar from '../InfoBar'
import Input from '../Input'
import Messages from '../Messages'

let socket

const Chat = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const location = useLocation()
  const ENDPOINT = 'http://localhost:4005'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room: room }, (props) => {})
    console.log(socket)

    return () => {
      socket.emit('disconnect')

      socket.off()
    }
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  // function for sending messages
  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      console.log('sendMessage')
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages)

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}

export default Chat
