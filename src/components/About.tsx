import { Lightbulb, Wrench, ShieldCheck, Monitor } from 'lucide-react';

const services = [
  { icon: Lightbulb, title: 'Consulta em iluminao', desc: 'Projetos personalizados para cada ambiente, com anlise tcnica e simulaes.' },
  { icon: Wrench, title: 'Instalao profissional', desc: 'Luminrias e sistemas com acabamento impecvel e conformidade com normas.' },
  { icon: ShieldCheck, title: 'Manuteno completa', desc: 'Planos preventivos e corretivos para garantir durabilidade e segurana.' },
  { icon: Monitor, title: 'Automao inteligente', desc: 'Controle via app, sensores de presena e integrao com assistentes.' },
];

export const About = () => (
  <section id="sobre" className="section bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="section-header">
        <h2 className="section-title">Sobre a Prolumi</h2>
        <p className="section-subtitle">
          Especialistas em iluminao desde 2015. Criamos ambientes mais seguros,
          confortveis e elegantes com solues de alta qualidade.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card items-center text-center">
            <div className="p-3 bg-[var(--primary-50)] rounded-xl mb-4">
              <Icon size={28} className="text-[var(--primary)]" />
            </div>
            <h3 className="font-bold text-lg text-[var(--primary-dark)] mb-2">{title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
