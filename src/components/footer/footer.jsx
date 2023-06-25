import React from 'react'
import './footer.css';
//import wave from '../../images/wave.png'
import { AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            {/* <img src={wave} alt="nothing" /> */}
            <div className="footer-content">
                <span>
                   bharath91505@gmail.com
                </span>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/smart_swag_bharth" target="_blank" rel="noopener noreferrer"><AiFillInstagram style={{ color: "white", background: "rgb(37, 37, 37)" }} size="3rem" /></a>
                    <a href="https://www.facebook.com/bharath.smart.927" target="_blank" rel="noopener noreferrer"><AiFillFacebook style={{ color: "white", background: "rgb(37, 37, 37)" }} size="3rem" /></a>
                    <a href="https://github.com/bharathrames" target="_blank" rel="noopener noreferrer"><AiFillGithub style={{ color: "white", background: "rgb(37, 37, 37)" }} size="3rem" /></a>
                    <a href="https://www.linkedin.com/in/bharath-kumar-84b654243" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={{ color: "white", background: "rgb(37, 37, 37)" }} size="3rem" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer