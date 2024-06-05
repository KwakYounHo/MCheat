import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

import LogoFace from "@/assets/img/Logo-face.png";

export default function HeaderAvator() {
  return (
    <div className={"flex items-center gap-4"}>
      <Avatar>
        <Link to={"/"}>
          <AvatarImage src={LogoFace} />
          <AvatarFallback>SS</AvatarFallback>
        </Link>
      </Avatar>
      <p className={"hidden lg:block"}>SScammer</p>
    </div>
  );
}
