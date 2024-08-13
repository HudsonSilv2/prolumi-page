import { Logo } from "./logo";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <div className="p-1">
      <ul className="flex justify-evenly text-center pt-3 sm:pt-0 items-center font-semibold">
        <Logo />
        <li className="hidden p-2 sm:flex cursor-pointer hover:text-green-400">Sobre</li>
        <li className="hidden p-2 sm:flex cursor-pointer hover:text-green-400">Parceiros</li>
        <li className="hidden p-2 sm:flex cursor-pointer hover:text-green-400">Projetos</li>
        <li className="hidden p-2 sm:flex cursor-pointer hover:text-green-400">Contato</li>
      </ul>
      <div className="flex flex-1 justify-end p-2 sm:hidden">
        <Menu/>
      </div>
    </div>
  );
};
