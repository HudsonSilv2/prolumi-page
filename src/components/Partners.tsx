import parceImg from '../assets/parce.png';
import logo1 from '../assets/logoParce.png';
import logo2 from '../assets/logoParce1.svg';
import logo3 from '../assets/LogoParce2.webp';

const partnerLogos = [
  { src: logo3, alt: 'Nal - parceiro de iluminao' },
  { src: logo1, alt: 'SX - parceiro de iluminao' },
  { src: logo2, alt: 'Well - parceiro de iluminao' },
];

export const Partners = () => (
  <section id="parceiros" className="section bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="section-header">
        <h2 className="section-title">Nossos Parceiros</h2>
        <p className="section-subtitle">
          Colaboraes que impulsionam nossos projetos e fortalecem nossa rede de inovao.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <img
          src={parceImg}
          alt="Parceiros Prolumi"
          className="w-full rounded-2xl object-cover shadow-lg"
        />
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4">
            Juntos iluminamos mais
          </h3>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Nossas parcerias nos permitem oferecer produtos de alta qualidade,
            solues inovadoras e preos competitivos para todos os projetos.
          </p>
          <a href="#contato" className="btn-primary">
            Fale com nossos parceiros
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 bg-[var(--primary-50)] p-8 rounded-2xl border border-[var(--primary-100)]">
        {partnerLogos.map((logo) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center w-44 h-24 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img src={logo.src} alt={logo.alt} className="object-contain h-12" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
