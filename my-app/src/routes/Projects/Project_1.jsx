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
            heading="Russia"
            text="The Motherland"
            backgroundColor = "#43c729"
        />
        <SpecificProjectItem
            heading="Fleeing to Russia"
            text1="I Fled to Russia to ensure I could cover my tail when the CIA came after me. I totally am not on Putin's payroll and my family is not in state prision."
            image1 = {Mother_Russia}
            text2=" Anyway, it is pretty cold here. The food is okay, the people are nice, and the vodka is strong. I am not sure how long I will be here, but I am sure it will be a while."
            image2 = "https://www.telegraph.co.uk/multimedia/archive/02633/ed_2633795b.jpg"
        />
      <Footer/>
    </div>
  )
}

export default Project_1
