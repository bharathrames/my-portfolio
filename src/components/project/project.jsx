import React from 'react';
import projectdata from './projectdata'
import './project.css';


const Project = () => {

  return (
    // items.frontendgithubLink
    <div className="projectdiv" id='project'>
        <div className="projecttittle">
            Projects :
        </div>
        <div className="projectcarddiv">
        {projectdata.map((items,index)=>{
           
            return(
                <div key ={index} className="projectcard">
                          
                    <div className="projectbody">
                    <div className="projectName">
                        {items.projectName} 
                    </div>
                    <div className="projectimage">
                        <img src={items.projectImage} alt="nothing" />
                    </div>
                    <div className="buttonLink">
                        <button>Frontend Source Code</button>
                        <button>Live Site</button>
                        <button>Backend Source Code</button>
                    </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Project