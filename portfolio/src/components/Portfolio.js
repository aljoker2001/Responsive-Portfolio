import React from 'react';
import Project from './Project'

var projects = require('../data/projects.json').projects
function Portfolio(props) {
    return (
        <div>
            <h1 className='text-white' id='portfolio'>Portfolio</h1>
            <div className='d-flex flex-wrap'>
                {projects.map((project) => (
                    <Project 
                    link={project.link}
                    image={project.image}
                    alt={project.alt}
                    name={project.name}
                    GitHub={project.GitHub}
                    description={project.description}
                    />
                            ))}
            </div>
        </div>
    )
}

export default Portfolio;