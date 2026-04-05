import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import { ArrowRight } from 'lucide-react';

const projects = [
  { img: image1, tag: 'Residencial', desc: 'Iluminao de ambiente residencial completo com LED de alta eficincia' },
  { img: image2, tag: 'Corporativo', desc: 'Projeto de iluminao para espao corporativo com automao integrada' },
  { img: image3, tag: 'Fachada', desc: 'Iluminao cnica de fachada comercial com efeitos dinmicos' },
];

export const Projects = () => (
  <section id="projetos" className="section bg-[var(--primary-50)]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="section-header">
        <h2 className="section-title">Projetos Realizados</h2>
        <p className="section-subtitle">
          Conhea alguns dos projetos que transformaram espaos com nossas solues de iluminao.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ img, tag, desc }) => (
          <div
            key={tag}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                loading="lazy"
                src={img}
                alt={`Projeto ${tag}`}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-[var(--primary)] text-white rounded-lg shadow-sm">
                {tag}
              </span>
            </div>
            <div className="p-5 flex items-center justify-between">
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
              <ArrowRight size={18} className="text-[var(--primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
