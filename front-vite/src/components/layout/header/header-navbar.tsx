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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import style from "./header-navbar.module.css";

export default function NavBar() {
  return (
    // desktop menu
    <NavigationMenu className={"hidden lg:block"}>
      <NavigationMenuList>
        <MenuItem arr={navList} />
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={navList.support[0].href} className={"capitalize"}>
              {navList.support[0].title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className={cn(style.viewport)} />
    </NavigationMenu>

    // other menu
  );
}

const MenuItem = ({ arr }: { arr: NavList }): JSX.Element => {
  return (
    <>
      {(Object.keys(arr) as Array<keyof NavList>).map((property) => {
        if (property === "support") return <></>;
        return (
          <NavigationMenuItem>
            <NavigationMenuTrigger className={"capitalize"}>
              {property}
            </NavigationMenuTrigger>
            <NavigationMenuContent className={style.navigationContent}>
              <ul>
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
          className={cn(style.navigationLinkAnchor, className)}
          ref={ref}
        >
          <div className="capitalize">{title}</div>
          <p
            className={cn(style.navigationLinkDescription, "tansition-colors")}
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
