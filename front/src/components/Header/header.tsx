import { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "@/model/Header/navList";

import menuOpen from "@/img/menu-open.svg";
import menuClose from "@/img/menu-close.svg";

export default function Header(): JSX.Element {
  const [menu, setMenu] = useState<boolean>(false);

  function menuControl() {
    setMenu(!menu);
  }

  return (
    <header
      className={
        "flex items-center h-[60px] md:h-[85px] w-full bg-background stick z-10 bg-slate-800 top-0 text-white"
      }
    >
      <div className={"mx-10"}>
        <Link to={"/"}>
          <img
            src={"/img/Logo-face.png"}
            alt={"Logo img"}
            className={
              "w-[45px] md:w-[55px] hover:scale-105 rounded-full shadow-white/85 shadow-inner"
            }
          />
        </Link>
      </div>
      <nav className={"w-full relative"}>
        <div className={"hidden md:block"}>
          <ul className={"flex gap-10 lg:text-xl md:text-base"}>
            {navList.map((element, key) => {
              return (
                <li key={key} className={"capitalize"}>
                  <Link to={element.to}>{element.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={"md:hidden absolute right-10 -top-4"}>
          <button onClick={menuControl}>
            {menu ? (
              <img src={menuClose} alt={"close menu"} className={"w-8"} />
            ) : (
              <img src={menuOpen} alt="open menu" className={"w-8"} />
            )}
          </button>
          {menu ? (
            <div className={"absolute bg-red-300 w-32 -right-10 top-11 -z-10"}>
              <p>요기 메뉴</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </header>
  );
}
