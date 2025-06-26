import { Logo } from "./logo";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <header className="p-1 h-20 flex items-center justify-around bg-gray-700 text-white fixed top-0 left-0 w-full z-10">
      <Logo />
      <nav className="hidden sm:flex gap-6 font-semibold a">
        {["Sobre", "Parceiros", "Projetos", "Contato"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="p-2 hover:text-green-400 cursor-pointer transition duration-300 ease-in-out"
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
