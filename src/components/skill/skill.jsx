
import React from 'react'
import './skill.css'
import mongodbimage from '../../images/mongodblogo.png'
import nodeimage from '../../images/nodejs-logo.png'
import reactimage from '../../images/reactlogo.png'
import htmlimage from '../../images/html-logo.png'
import cssimage from '../../images/css-logo.png'
import jsimage from '../../images/js-logo.png'
import expressjsimage from '../../images/expressjs-logo.png'
import bootstrapimage from '../../images/bootstrap-logo.png'
import materialuiimage from '../../images/materialui-logo.png'
import postmanimage from '../../images/postman-logo.png'
import reduximage from '../../images/redux-logo.png'
import gitimage from '../../images/git-logo.png'





const Skill = () => {
  return (
    <div className="skillmain" id='skill'>
      <div className="skilltittle">
          SKILL :
        </div>
        
      <div className="skilldiv">
      <div className="skill-left">
              {/* blur div */}
       <div className='blur skillleftblur' ></div>
        <div className="skill-maincircle">
          <span className="skill-seccircle">
            <img src={mongodbimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={expressjsimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={reactimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={nodeimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={htmlimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={cssimage} alt="nothing" />

          </span>

          <span className="skill-seccircle">

            <img src={jsimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={bootstrapimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={materialuiimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={postmanimage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={reduximage} alt="nothing" />

          </span>
          <span className="skill-seccircle">

            <img src={gitimage} alt="nothing" />

          </span>
        </div>
      </div>
      <div className="skill-right">
              {/* blur div */}
       <div className='blur skillrightblur'></div>
        <div className="skillimage">
          <img src={mongodbimage} alt="nothing" />
          <img src={expressjsimage} alt="nothing" />
          <img src={reactimage} alt="nothing" />
          <img src={nodeimage} alt="nothing" />
          <img src={htmlimage} alt="nothing" />
          <img src={cssimage} alt="nothing" />
          <img src={jsimage} alt="nothing" />
          <img src={bootstrapimage} alt="nothing" />
          <img src={materialuiimage} alt="nothing" />
          <img src={postmanimage} alt="nothing" />
          <img src={reduximage} alt="nothing" />
          <img src={gitimage} alt="nothing" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skill