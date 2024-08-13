import { useState } from "react";

export const Menu = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
    // if (menu === true) {
    //   setMenu(false);
    // } else if (menu === false) {
    //   setMenu(true);
    // }
  }

  return (
    <>
      {menu &&
        <div className="">
          <ul className="pr-8 pl-4 flex items-center text-center font-semibold">
            <li className="p-2 cursor-pointer hover:text-green-400">Sobre</li>
            <li className="p-2 cursor-pointer hover:text-green-400">Parceiros</li>
            <li className="p-2 cursor-pointer hover:text-green-400">Projetos</li>
            <li className="p-2 cursor-pointer hover:text-green-400">Contato</li>
          </ul>
        </div>
      }
      <div className="">
        <div onClick={openMenu} className="w-6 h-6 cursor-pointer">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-9"
            color='#444'
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
