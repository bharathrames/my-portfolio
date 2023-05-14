import React from 'react'
import './footer.css';
import wave from '../../images/wave.png'
import { AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="nothing" />
            <div className="footer-content">
                <span>
                    dhanushmd4021@gmail.com
                </span>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/mr_dhanush_c" target="_blank" rel="noopener noreferrer"><AiFillInstagram style={{ color: "white", background: "transparent" }} size="3rem" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100023909237846" target="_blank" rel="noopener noreferrer"><AiFillFacebook style={{ color: "white", background: "transparent" }} size="3rem" /></a>
                    <a href="https://github.com/DhanushChinnaiyan" target="_blank" rel="noopener noreferrer"><AiFillGithub style={{ color: "white", background: "transparent" }} size="3rem" /></a>
                    <a href="https://www.linkedin.com/in/dhanush-c-4a8799269" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={{ color: "white", background: "transparent" }} size="3rem" /></a>


                </div>
            </div>
        </div>
    )
}

export default Footer