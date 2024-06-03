import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { type NavItem, navList } from "@/model/Header/navList";

import "@/components/Header/header.css";

import { ReactComponent as MenuOpen } from "@/img/menu-open.svg";
import { ReactComponent as MenuClose } from "@/img/menu-close.svg";

export default function Header(): JSX.Element {
  const location = useLocation();

  const [menu, setMenu] = useState<boolean>(false);

  // navigation list grouping
  const navGroup = navList.reduce((acc: { [key: string]: NavItem[] }, item) => {
    const { tag } = item;

    if (!acc[tag]) {
      acc[tag] = [];
    }

    acc[tag].push(item);

    return acc;
  }, {});

  // menu-open control function
  function menuControl() {
    setMenu(!menu);
  }

  return (
    <header>
      {/* Logo */}
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

      {/* nav List */}
      <nav className={"w-full"}>
        {/* big size browser */}
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

        {/* mobile size browser start */}
        <div className={"md:hidden w-full flex justify-end"}>
          {menu && (
            <div
              className={
                "absolute w-screen h-screen top-0 left-0 z-[20] bg-background/80"
              }
              onClick={menuControl}
            />
          )}
          <button onClick={menuControl} className={"mr-10"}>
            {!menu && <MenuOpen className={"w-8 h-8 fill-white"} />}
          </button>
          {/* menu open */}
          {menu ? (
            <div className={"header-modal menu-in max-h-screen"}>
              {/* modal header */}
              <div className="w-full flex justify-between border-b pb-2 border-foreground">
                <p className={"capitalize text-4xl font-bold"}>menu</p>
                <button onClick={menuControl} className={"mr-4"}>
                  {menu && <MenuClose className={"w-8 h-8 fill-foreground"} />}
                </button>
              </div>
              {/* menu list */}
              <div className={"flex flex-col gap-5"}>
                {Object.keys(navGroup).map((tag, i) => {
                  return (
                    <div key={i}>
                      <p className={"text-2xl uppercase mb-2 font-semibold"}>
                        {tag}
                      </p>
                      <ul className={"ml-4"}>
                        {navGroup[tag].map((element, i) => {
                          console.log(location.pathname === element.to);
                          return (
                            <li
                              key={i}
                              className={`capitalize text-lg border-l-2 pl-4 ${
                                location.pathname === element.to
                                  ? "border-red-300 text-red-300"
                                  : "border-foreground"
                              }`}
                            >
                              <Link to={element.to}>{element.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* mobile size browser end */}
      </nav>
    </header>
  );
}
