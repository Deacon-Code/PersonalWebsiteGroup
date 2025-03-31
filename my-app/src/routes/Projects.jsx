import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import useScrollToTop from '../hooks/useScrollToTop'
import GenericHeader from '../components/GenericHeader'

const ProjectsPage = () => {
  useScrollToTop()
  return (
    <div>
      <Navbar/>
      <GenericHeader
        heading="Projects"
        text="Check out my projects!"
        backgroundColor = "#43c729"
      />
      <Projects/>
      <Footer/>
    </div>
  )
  return (
    <div>
      <Navbar/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default ProjectsPage
