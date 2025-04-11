import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useScrollToTop from '../../hooks/useScrollToTop'
import GenericHeader from '../../components/GenericHeader'
import SpecificProjectItem from '../../components/SpecificProjectItem'
import Mother_Russia from "../../assets/Mother_Russia.jpg"

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
        <SpecificProjectItem
            heading="Fleeing to Russia"
            text1="I Fled to Russia to ensure I could cover my tail when the CIA came after me. I totally am not on Putin's payroll and my family is not in state prision."
            image1 = {Mother_Russia}
            text2="I Fled to Russia to ensure I could cover my tail when the CIA came after me. I totally am not on Putin's payroll and my family is not in state prision."
            image2 = {Mother_Russia}
        />
      <Footer/>
    </div>
  )
}

export default Project_1
