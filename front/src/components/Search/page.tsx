import Header from "@/components/Header/header";
import { Helmet } from "react-helmet";

import { ReactComponent as SearchPerson } from "@/img/search-person.svg";

import "@/components/Search/search.css";

export default function Main() {
  return (
    <>
      <Helmet>
        <title>SScammer :: search</title>
      </Helmet>
      <Header />
      <div className={"search-container"}>
        <div className={"flex flex-col items-center animate-in"}>
          <img
            src="/img/logo-face.png"
            alt="Logo Img"
            className={"w-[170px] md:w-[250px]"}
          />
          <h2
            className={
              "text-3xl md:text-6xl font-bold uppercase drop-shadow-lg text-center"
            }
          >
            search scammer
          </h2>
        </div>
        <form className={"w-full lg:w-3/5 flex justify-between"}>
          <div className={"relative w-full"}>
            <input
              type={"text"}
              name={"search"}
              id={"search"}
              title={"search"}
              className={
                "h-20 md:h-24 w-full py-2 pl-5 pr-20 md:pr-32 md:py-4 md:pl-10 text-xl md:text-4xl text-black/60 rounded-full shadow-lg"
              }
            />
            <button
              type="submit"
              className={
                "absolute w-20 md:w-32 right-0 top-0 h-full rounded-full text-black/60 bg-slate-300/50 flex justify-center items-center"
              }
            >
              {""}
              <SearchPerson
                className={"w-10 h-10 lg:w-12 lg:h-12 fill-black"}
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
