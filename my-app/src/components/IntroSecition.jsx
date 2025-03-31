import React from 'react'
import './IntroSectionStyles.css'
import useRedirectOnClick from '../hooks/useRedirectOnClick'


const IntroSecition = () => {
  const project_redirect = useRedirectOnClick('/projects')
  return (
    <div className='intro-section-container'>
        <div className = "left">
            <h1>Hi, I'm Edward Snowden</h1>
            <p>Hacker</p>
            <p>Spy</p>
            <p>Fullstack Developer</p>
            <button onClick={project_redirect}>View Projects</button>
          </div>
        <div className = "right">
            <img src="https://interactive.wired.com/www-wired-com__2014__08__edward-snowden/02_Cnt1_Fr61.jpg" alt="Edward Snowden"/>
        </div>
    </div>

  )
}

export default IntroSecition;
