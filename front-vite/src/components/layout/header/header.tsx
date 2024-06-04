import HeaderAvator from "@/components/layout/header/header-avatar";
import NavBar from "@/components/layout/header/header-navbar";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Header() {
  return (
    <header>
      <HeaderAvator />
      <NavBar />
      <ThemeToggle />
    </header>
  );
}
