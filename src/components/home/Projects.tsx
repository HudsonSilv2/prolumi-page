// src/components/Projects.tsx
import React from 'react';
import image1 from '../images/projeto1.jpg';
import image2 from '../images/projeto2.jpg';
import image3 from '../images/projeto3.jpg';

export const Projects: React.FC = () => {
return (
<div className="projects">
    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Projetos Realizados</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="project-item bg-white rounded-lg overflow-hidden shadow">
        <img loading="lazy" src={image1} alt="Projeto 1" className="w-full h-48 object-cover" />
        <div className="p-3">Iluminação de ambiente residencial - Projeto 1</div>
    </div>
    <div className="project-item bg-white rounded-lg overflow-hidden shadow">
        <img loading="lazy" src={image2} alt="Projeto 2" className="w-full h-48 object-cover" />
        <div className="p-3">Iluminação corporativa - Projeto 2</div>
    </div>
    <div className="project-item bg-white rounded-lg overflow-hidden shadow">
        <img loading="lazy" src={image3} alt="Projeto 3" className="w-full h-48 object-cover" />
        <div className="p-3">Iluminação de fachada - Projeto 3</div>
    </div>
    </div>
</div>
);
};
