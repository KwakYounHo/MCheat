import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LogoFace from "@/assets/img/Logo-face.png";

import style from "./not-found.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <div className={style.mainWrapper}>
        <img
          src={LogoFace}
          alt="logo-img.png"
          className={"opacity-20 w-[20rem]"}
        />
        <div className={style.contentWrapper}>
          <p className={"text-6xl font-bold"}>Oppps...</p>
          <p className={"capitalize text-lg font-semibold"}>
            can not found page
          </p>
          <Button
            variant="outline"
            onClick={() => {
              navigate(-1);
            }}
            className={"text-lg rounded-md"}
          >
            Go back to previous page
          </Button>
        </div>
      </div>
    </main>
  );
}
