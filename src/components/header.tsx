import { Logo } from "./logo";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <div className="p-3">
      <ul className="flex justify-evenly text-center pt-3 sm:pt-0">
        <Logo />
        <li className="hidden p-2 sm:flex">Sobre</li>
        <li className="hidden p-2 sm:flex">Parceiros</li>
        <li className="hidden p-2 sm:flex">Projetos</li>
        <li className="hidden p-2 sm:flex">Contato</li>
      </ul>
      <div className="flex flex-1 justify-end p-2 sm:hidden">
        <Menu />
      </div>
    </div>
  );
};
