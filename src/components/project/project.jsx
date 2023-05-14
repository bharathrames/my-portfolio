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
                        <button><a href={items.frontendgithubLink} target="_blank" rel="noopener noreferrer" >Frontend Source Code</a></button>
                        <button><a href={items.deployedLink} target="_blank" rel="noopener noreferrer" >Live Site</a></button>
                        <button><a href={items.backendgithubLink} target="_blank" rel="noopener noreferrer" >Backend Source Code</a></button>
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