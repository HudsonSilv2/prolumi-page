// src/components/Projects.tsx
import React from 'react';
import image1 from '../images/projeto1.jpg';
import image2 from '../images/projeto2.jpg';
import image3 from '../images/projeto3.jpg';

export const Projects: React.FC = () => {
return (
<div className="projects">
    <h2>Projetos Realizados</h2>
    <div className="project-gallery">
    <div className="project-item">
        <img src={image1} alt="Projeto 1" />
        <p>Iluminação de ambiente residencial - Projeto 1</p>
    </div>
    <div className="project-item">
        <img src={image2} alt="Projeto 2" />
        <p>Iluminação corporativa - Projeto 2</p>
    </div>
    <div className="project-item">
        <img src={image3} alt="Projeto 3" />
        <p>Iluminação de fachada - Projeto 3</p>
    </div>
    </div>
</div>
);
};
