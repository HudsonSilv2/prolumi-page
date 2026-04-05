import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const navLinks = [
    ['#home', 'Incio'],
    ['#sobre', 'Sobre'],
    ['#parceiros', 'Parceiros'],
    ['#projetos', 'Projetos'],
    ['#contato', 'Contato'],
  ];

  return (
    <footer className="bg-[var(--primary-dark)] text-white/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-sm">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo_1.png" alt="Logo" className="h-10 w-10 object-contain rounded-lg bg-white/20 p-1" />
              <h3 className="font-bold text-xl text-white">Prolumi</h3>
            </div>
            <p className="leading-relaxed text-white/70">
              Solues inteligentes em iluminao para transformar espaos
              e trazer mais segurana, conforto e beleza.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Contato</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={16} className="text-[var(--primary-light)]" />
                contato@prolumi.com.br
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={16} className="text-[var(--primary-light)]" />
                (11) 9999-8888
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin size={16} className="text-[var(--primary-light)]" />
                So Paulo, SP
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Navegao</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 hover:text-[var(--primary-light)] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-center text-xs text-white/40">
          {new Date().getFullYear()} Prolumi. Projeto escolar -- HudsonSilv2. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
