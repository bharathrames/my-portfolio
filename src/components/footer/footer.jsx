import React from 'react'
import './footer.css';
import wave from '../../images/wave.png'
import {AiFillInstagram, AiFillFacebook,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
   <div className="footer">
    <img src={wave} alt="nothing" />
    <div className="footer-content">
        <span>
            dhanushmd4021@gmail.com
        </span>
        <div className="footer-icons">
            <AiFillInstagram style={{color:"white",background:"transparent"}} size="3rem" />
            <AiFillFacebook style={{color:"white",background:"transparent"}} size="3rem"/>
            <AiFillGithub style={{color:"white",background:"transparent"}} size="3rem"/>
            <AiFillLinkedin style={{color:"white",background:"transparent"}} size="3rem"/>
        </div>
    </div>
   </div>
  )
}

export default Footer