// src/components/About.tsx
import React from 'react';

export const About: React.FC = () => {
return (
<div className="about">
    <h2>Sobre a Luz & Vida Iluminação</h2>
    <p>
    A **Luz & Vida Iluminação** é uma empresa especializada em soluções
    de iluminação privada. Atuamos no mercado desde 2015, oferecendo
    serviços de instalação e manutenção de sistemas de iluminação para
    residências, comércios e espaços corporativos. Nossa missão é proporcionar
    ambientes mais seguros, confortáveis e elegantes através de uma iluminação
    planejada de alta qualidade.
    </p>
    <h3>Nossos Serviços</h3>
    <ul>
        <li>Consultoria em projetos de iluminação</li>
        <li>Instalação de luminárias e sistemas de iluminação</li>
        <li>Manutenção preventiva e corretiva</li>
        <li>Automação de iluminação</li>
    </ul>
</div>
);
};
