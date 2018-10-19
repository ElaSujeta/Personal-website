import React from 'react';

import "./Portfolio.css"


export const Portfolio = () => {
    return (
        <section className='projects-container'>
    
            <div className='project-wrapper project-1'>
                <h3 className='title-project'>Memory Game</h3>
                <p className='description-project'> JavaScript | HTML | CSS</p>
                <a className='open-project' href = 'https://cocky-cray-2c7e6e.netlify.com/' target="_blank"><p>Uruchom aplikację</p></a>
            </div>
        

            <div className='project-wrapper project-2'>
                <h3 className='title-project'>Projekt 2</h3>
                <p className='description-project'>Photoshop | HTML | SASS | JavaScript</p>
            </div>

            <div className='project-wrapper project-3'>
                <h3 className='title-project'>Projekt 3</h3>
                <p className='description-project'>Photoshop | HTML | CSS | JavaScript | React</p>
            </div>

            <div className='project-wrapper project-4'>
                <h3 className='title-project'>Projekt 4</h3>
                <p className='description-project'>HTML | CSS | JavaScript | Bootstrap</p>
            </div>

            <div className='project-wrapper project-5'>
                <h3 className='title-project'>Projekt 5</h3>
                <p className='description-project'>Photoshop | HTML | CSS | JavaScript | React</p>
            </div>
        </section>
    )
};