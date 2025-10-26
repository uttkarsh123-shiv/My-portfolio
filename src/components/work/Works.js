import React from 'react';
import { projectsData } from './Data'; // Import your data
import './work.css'; // Import your CSS

const Works = () => {
    return (
        <section className="projects section" id="projects">
            <div className="projects__container container">
                {projectsData.map((project, index) => {
                    // Projects with an EVEN index (0, 2, 4...) will be aligned RIGHT.
                    // Projects with an ODD index (1, 3, 5...) will be aligned LEFT.
                    const isAlignedRight = index % 2 === 0;

                    return (
                        <div
                            key={project.id}
                            className={`project__row ${isAlignedRight ? 'project__row-right' : 'project__row-left'}`}
                        >
                            {/* Project Image */}
                            <div className="project__image-container">
                                <img src={project.image} alt={project.title} className="project__img"  />
                            </div>

                            {/* Project Content */}
                            <div className="project__content">
                                <h3 className="project__title">{project.title}</h3>
                                <p className="project__description">{project.description}</p>
                                
                                <div className="project__links">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project__link button button--flex"
                                    >
                                        Live Demo <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project__github button--flex"
                                    >
                                        <i className="uil uil-github-alt project__github-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Works;