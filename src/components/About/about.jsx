import React from 'react'
import './about.css'
import mongodbimage from '../../images/mongodblogo.png'
import nodeimage from '../../images/nodejs-logo.png'
import reactimage from '../../images/reactlogo.png'
import htmlimage from '../../images/html-logo.png'
import cssimage from '../../images/css-logo.png'
import jsimage from '../../images/js-logo.png'


const About = () => {
  return (

    <div className='aboutdiv' id='About'>
      <div className="abouttittle">ABOUT ME :</div>
      <div className="aboutsection">
          
          <div className="aboutleft">
               
          <div>Hi there! My name is Dhanush, and I am a MERN stack developer. I am passionate about building robust and scalable web applications using the latest technologies and frameworks.</div>
          <div>My primary focus is on the MERN stack, which consists of MongoDB, Express, React, and Node.js. I have experience building full-stack applications using this technology stack, and I am always eager to learn more. In addition, I am proficient in other front-end  technologies such as JavaScript, HTML/CSS,Bootstrap and Material Ui.</div>
          <div>Thank you for taking the time to read my portfolio "About" section. If you have any questions or would like to discuss potential opportunities, please feel free to reach out to me.</div>
        </div>
        
        <div className="aboutright">
         <div className="container">
         <div className="images">
            <img src={mongodbimage} alt="nothing" />
            <img src={reactimage} alt="nothing" />
            <img src={nodeimage} alt="nothing" />
            <img src={htmlimage} alt="nothing" />
            <img src={cssimage} alt="nothing" />
            <img src={jsimage} alt="nothing" />
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default About;