import React, { useState } from 'react'
import '../components/Card.css'
function Card() {
  const [active, setActive] = useState(true)

  const clickEvent = () => {
    setActive(current => !current)
  }

  return (
    <div>
      <h2>ReactJs Assignment-1</h2>
      <div className='card-section'>
        <div className={active ? 'card-one' : 'card-one-inactive'}>
          <p>If you click here, the card two background image will change.</p>
          <button onClick={clickEvent}>Click Me</button>
        </div>
        <div className={active ? 'card-two-inactive' : 'card-two'}>
          <p>If you click here, the card one background image will change.</p>
          <button onClick={clickEvent}>Click Me</button>
        </div>
      </div>
    </div>
  )
}

export default Card