import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './join.css'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div>
      <div className='joinOuterContainer'>
        <div className='joinInnerCointainer'>
          <h1 className='heading'>Join</h1>
          <div>
            <input
              type='text'
              placeholder='Name'
              className='joinInput'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Room'
              className='joinInput'
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <Link
            onclick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className='button mt-20' type='submit'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join
