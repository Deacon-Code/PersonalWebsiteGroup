import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useScrollToTop from '../../hooks/useScrollToTop'
import GenericHeader from '../../components/GenericHeader'

const Project_1 = () => {
    useScrollToTop()
  return (
    <div>
      <Navbar/>
        <GenericHeader
            heading="Project 1"
            text="This is my first project!"
            backgroundColor = "#43c729"
        />
      <Footer/>
    </div>
  )
}

export default Project_1
