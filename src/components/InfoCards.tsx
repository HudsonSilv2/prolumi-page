import { MapPin, MessageCircle, Search } from 'lucide-react';

const cards = [
  {
    icon: MapPin,
    title: 'Localizao',
    description: 'Conhea nossa sede e veja de perto como funciona nossa linha de produo de iluminao inteligente.',
    buttonText: 'Saiba mais',
  },
  {
    icon: MessageCircle,
    title: 'Experiencia',
    description: 'Compartilhe conosco como foi sua experincia com nossos produtos e servios.',
    buttonText: 'Conte-nos',
  },
  {
    icon: Search,
    title: 'Encontre Produtos',
    description: 'Busque em nosso catlogo a soluo ideal para seu espao residencial ou comercial.',
    buttonText: 'Pesquise',
  },
];

export const InfoCards = () => (
  <section className="section bg-[var(--primary-50)]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="section-header">
        <h2 className="section-title">Por que escolher a Prolumi?</h2>
        <p className="section-subtitle">
          Qualidade, tecnologia e compromisso em cada projeto.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {cards.map(({ icon: Icon, title, description, buttonText }) => (
          <div key={title} className="card text-center max-w-sm w-full">
            <div className="p-3 bg-[var(--primary-50)] rounded-xl self-center mb-3">
              <Icon size={28} className="text-[var(--primary)]" />
            </div>
            <h3 className="font-bold text-xl text-[var(--primary-dark)]">{title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed my-3">{description}</p>
            <button className="btn-primary mt-auto">{buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
