import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useScrollToTop from '../../hooks/useScrollToTop'
import GenericHeader from '../../components/GenericHeader'
import SpecificProjectItem from '../../components/SpecificProjectItem'
import Mother_Russia from "../../assets/Mother_Russia.jpg"

const Project_2 = () => {
    useScrollToTop()
  return (
    <div>
      <Navbar/>
        <GenericHeader
            heading="NSA"
            text="Leaking"
            backgroundColor = "#43c729"
        />
        <SpecificProjectItem
            heading="NSA Leaks"
            text1="I leak so much. I am the best leaker. I leak all the time. I am the best leaker in the world. I leak so much that I have to go to Russia to hide from the CIA. I am not a spy, I am just a leaker."
            image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExz6rIl6JcYd6mO86p6q9ZdwxbJs715VrCg&s"
            text2="You know, some pepople say that leaking is bad, but I think it is good. I think that leaking is the best thing ever. I love leaking. I love being a threat to the US government. I love being a threat to the world. I love being a threat to everything."
            image2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Smirnoff_Red_Label_8213.jpg/1200px-Smirnoff_Red_Label_8213.jpg"
        />
      <Footer/>
    </div>
  )
}

export default Project_2
