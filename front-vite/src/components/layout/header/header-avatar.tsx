import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

import LogoFace from "@/assets/img/Logo-face.png";

export default function HeaderAvator() {
  return (
    <Avatar>
      <Link to={"/"}>
        <AvatarImage src={LogoFace} />
        <AvatarFallback>SS</AvatarFallback>
      </Link>
    </Avatar>
  );
}
