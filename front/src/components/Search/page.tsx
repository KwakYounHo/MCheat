import Header from "@/components/Header/header";
import { Helmet } from "react-helmet";

export default function Main() {
  return (
    <>
      <Helmet>
        <title>SScammer :: search</title>
      </Helmet>
      <Header />
      <div
        className={
          "container m-auto p-4 min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-85px)] flex flex-col flex-1 justify-center items-center gap-5 md:gap-10"
        }
      >
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
                "absolute w-20 md:w-32 right-0 top-0 h-full rounded-full text-black/60 bg-slate-300/50"
              }
            >
              전송
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
