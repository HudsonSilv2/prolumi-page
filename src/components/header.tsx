import { Logo } from "./logo";
import { Menu } from "./menu";

export const Header = () => {
  return (
  <header className="p-2 h-20 flex items-center justify-between bg-white/60 backdrop-blur-md text-[var(--text)] fixed top-0 left-0 w-full z-30 border-b border-slate-200">
      <Logo />
      <nav className="hidden sm:flex gap-8 font-medium">
        {["Sobre", "Parceiros", "Projetos", "Contato"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="p-2 text-slate-700 hover:text-brand transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="sm:hidden">
        <Menu />
      </div>
    </header>
  );
};
