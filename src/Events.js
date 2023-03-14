import React from 'react'
import "./Events.css"
import Event from "./Event.js"


function Events() {
  return (
    <div className='events'>
        <Event
        image={'https://AymenGadri.github.io/football.jpg'}
        
        title="Football"
      />
      <Event
        image={'https://AymenGadri.github.io/basket.jpg'}
       
        title="Basketball"
      />
      <Event
        image={'https://AymenGadri.github.io/tennis.jpg'}
        
        title="Tennis"
      />
      <Event
        image={'https://AymenGadri.github.io/camping.jpg'}
        
        title="Camping"
      />
      <Event
        image={'https://AymenGadri.github.io/yoga.webp'}
        
        title="Yoga"
      />    
       <Event
        image={'https://AymenGadri.github.io/party.jpg'}
        
        title="Party"
      /> 
       <Event
        image={'https://AymenGadri.github.io/education.webp'}
        
        title="Education"
      /> 
       <Event
        image={'https://AymenGadri.github.io/fitness.jpg'}
        
        title="Fitness"
      /> 
       <Event
        image={'https://AymenGadri.github.io/conference.webp'}
        
        title="Conference"
      /> 
    </div>
  )
}

export default Events