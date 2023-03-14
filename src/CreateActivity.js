import React, {useState} from 'react'
import "./CreateActivity.css"
import { Avatar } from '@mui/material';   





function CreateActivity() {
  const [date , setDate] = useState();
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input

            type="text"
            className="messageSender__input"
            placeholder={`Event Name `}
          />

          <input type="date" onChange={e=>setDate(e.target.value)} /> 
    
          <input
            type="text"
            className="messageSender__input"
            placeholder={`Event address `}
          />
        </form>
      </div>
      <div className="messageSender__bottom">
        
        <form>
        
           <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Maximum  `}
          />

            <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Description `}
          />
         
          <button  type="submit">
            Create Activity
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateActivity