import React from 'react'
import './Input.css'

const Input = (props) => {
  const p = props
  return (
    <form className='form'>
      <input
        className='input'
        placeholder='Type a message...'
        type='text'
        value={p.message}
        onChange={(e) => p.setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? p.sendMessage(e) : null)}
      />
      <button className='sendButton' onClick={(e) => p.sendMessage(e)}>
        Send
      </button>
    </form>
  )
}

export default Input
