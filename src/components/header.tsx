import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Logo } from './logo';
import { useScrollThreshold } from '../hooks';

const navItems = ['Sobre', 'Parceiros', 'Projetos', 'Contato'];
const anchors = ['#sobre', '#parceiros', '#projetos', '#contato'];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollThreshold();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Logo scrolled={scrolled} />

        <nav className="hidden sm:flex gap-8 font-medium text-sm tracking-wide" aria-label="Navegao principal">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={anchors[i]}
              className={`transition-colors duration-200 ${
                scrolled
                  ? 'text-slate-600 hover:text-[var(--primary)]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className={`sm:hidden transition ${scrolled ? 'text-slate-700' : 'text-white'}`}
        >
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl mx-4 border border-[var(--border)] border-t-0" aria-label="Navegao mobile">
          <ul className="flex flex-col items-center py-2 font-medium">
            {navItems.map((item, i) => (
              <li key={item} className="w-full">
                <a
                  href={anchors[i]}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-6 text-slate-700 hover:text-[var(--primary)] hover:bg-[var(--primary-50)] rounded-lg transition text-center"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
