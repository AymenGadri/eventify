import React from 'react'
import "./Feed.css"
import Events from "./Events"
import CreateActivity from "./CreateActivity"

function Feed() {
  return (
    <div className='feed'>
        <Events />
        <CreateActivity />
    </div>
  )
}

export default Feed