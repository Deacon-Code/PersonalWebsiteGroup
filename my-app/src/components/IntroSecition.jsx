import React from 'react'
import './IntroSectionStyles.css'

const IntroSecition = () => {
  return (
    <div className='intro-section-container'>
        <div className = "left">
            <h1>Hi, I'm John Doe</h1>
            <p>Full Stack Developer</p>
            <button>View Projects</button>
            </div>
        <div className = "right">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="John Doe"/>
        </div>
    </div>

  )
}

export default IntroSecition
