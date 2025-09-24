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
      {menu && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md">
          <ul className="pr-8 pl-4 py-2 flex flex-col items-start text-left font-medium">
            <li className="p-2 cursor-pointer hover:text-brand">Sobre</li>
            <li className="p-2 cursor-pointer hover:text-brand">Parceiros</li>
            <li className="p-2 cursor-pointer hover:text-brand">Projetos</li>
            <li className="p-2 cursor-pointer hover:text-brand">Contato</li>
          </ul>
        </div>
      )}
      <div>
        <div onClick={openMenu} className="w-8 h-8 cursor-pointer text-slate-700">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
