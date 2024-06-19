import React from 'react'
import './projects.css'

import projects_images from '../assets/projects_images'

function Products () {
    return (
        <div className='projects-container'>
            <ul className='projects-list'>
                {projects_images.map((img, i) => {
                return <li key={i}>
                    <div className='project-container'>
                        <img src={projects_images[i]} alt="proj" />

                        <p>Descrição do projeto!</p>

                        <button><a rel='external' href='https://github.com/Ricardo-LK/FPS---Final-Project-Shooter' >Clique para testar meu projeto!</a></button>
                    </div>
                </li>})}

            </ul>
        </div>
    )
}

export default Products