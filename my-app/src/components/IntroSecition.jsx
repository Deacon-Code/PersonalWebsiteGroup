import React from 'react'
import './IntroSectionStyles.css'


const IntroSecition = () => {
  return (
    <div className='intro-section-container'>
        <div className = "left">
            <h1>Hi, I'm Edward Snowden</h1>
            <p>Hacker</p>
            <p>Spy</p>
            <p>Fullstack Developer</p>
            <button>View Projects</button>
          </div>
        <div className = "right">
            <img src="https://interactive.wired.com/www-wired-com__2014__08__edward-snowden/02_Cnt1_Fr61.jpg" alt="Edward Snowden"/>
        </div>
    </div>

  )
}

export default IntroSecition
