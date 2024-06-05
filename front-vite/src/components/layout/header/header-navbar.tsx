import * as React from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { type NavList, navList } from "@/models/header/nav-list";

export default function NavBar() {
  return (
    <NavigationMenu className={"hidden lg:block"}>
      <NavigationMenuList>
        <MenuItem arr={navList} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const MenuItem = ({ arr }: { arr: NavList }): JSX.Element => {
  return (
    <>
      {(Object.keys(arr) as Array<keyof NavList>).map((property) => {
        return (
          <NavigationMenuItem>
            <NavigationMenuTrigger className={"capitalize"}>
              {property}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 w-[500px] p-4 gap-3">
                {navList[property].map((e) => {
                  return (
                    <LinkItem title={e.title} href={e.href}>
                      {e.descriptiion}
                    </LinkItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      })}
    </>
  );
};

const LinkItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentProps<"a">
>(({ title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href!}
          className={
            "block tansition-colors duration-100 hover:bg-accent p-3 hover:text-accent-foreground rounded-md"
          }
          ref={ref}
        >
          <div className="capitalize">{title}</div>
          <p className={"text-sm leading-tight text-muted-foreground"}>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
