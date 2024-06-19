import React from 'react'
import './projects.css'

import projects_data from '../assets/all_projects'

function Products () {
    return (
        <div className='projects-container'>
            <ul className='projects-list'>
                {projects_data.map((project, i) => {
                return <li key={i}>
                    <div className='project-container'>
                        <img src={project.image} alt="proj" />

                        <div className='project-description'>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>

                        <button><a rel='external' href={project.link} >CLIQUE PARA TESTAR MEU PROJETO!</a></button>
                    </div>
                </li>})}

            </ul>
        </div>
    )
}

export default Products