import * as React from "react";
import { Link } from "react-router-dom";
import { type NavList, navList } from "@/models/header/nav-list";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    // desktop menu
    <NavigationMenu className={"hidden lg:block"}>
      <NavigationMenuList>
        <MenuItem arr={navList} />
      </NavigationMenuList>
      <div className={"absolute -left-1/3 top-[100%]"}>
        <NavigationMenuViewport />
      </div>
    </NavigationMenu>

    // other menu
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
>(({ title, children, className, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href!}
          className={cn(
            "block tansition-colors duration-100 hover:bg-accent p-3 hover:text-accent-foreground rounded-md focus:bg-accent focus:text-accent-foreground pointer-events-auto",
            className
          )}
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
