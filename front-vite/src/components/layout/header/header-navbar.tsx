// package
import * as React from "react";
import { Link } from "react-router-dom";
import { type NavList, navList } from "@/models/header/nav-list";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

// ui
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import style from "./header-navbar.module.css";

export default function NavBar() {
  return (
    <>
      {/* ============= desktop menu ============= */}
      <NavigationMenu className={"hidden lg:block"}>
        <NavigationMenuList>
          <MenuItem arr={navList} />
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={navList.support[0].href} className={"capitalize"}>
                {navList.support[0].title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport className={style.viewport} />
      </NavigationMenu>

      {/* ============= other menu ============= */}
      <div className={"lg:hidden"}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <p className={"flex items-center gap-2"}>
                <Menu /> Menu
              </p>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className={"overflow-y-auto"}>
            <SheetHeader>
              <SheetTitle className={"capitalize text-start text-3xl"}>
                all menu
              </SheetTitle>
              <SheetDescription className={"text-start"}>
                All service of <strong>SScammer</strong>
              </SheetDescription>
            </SheetHeader>
            <div className={"flex flex-col gap-5 py-4"}>
              {Object.keys(navList).map((property) => {
                const location = useLocation();
                return (
                  <div key={property}>
                    <h2 className={"capitalize text-2xl text-muted-foreground"}>
                      {property}
                    </h2>
                    <ul className={"ml-4 mt-2"}>
                      {navList[property as keyof NavList].map((e) => {
                        return (
                          <li
                            key={e.title}
                            className={`capitalize pl-4 border-l-2 ${
                              location.pathname === e.href
                                ? "border-l-foreground text-foreground"
                                : "border-l-muted-foreground text-muted-foreground"
                            }`}
                          >
                            <SheetClose asChild>
                              <Link to={e.href}>{e.title}</Link>
                            </SheetClose>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

// side components
const MenuItem = ({ arr }: { arr: NavList }): JSX.Element => {
  return (
    <>
      {(Object.keys(arr) as Array<keyof NavList>).map((property) => {
        if (property === "support") return <></>;
        return (
          <NavigationMenuItem key={property}>
            <NavigationMenuTrigger className={"capitalize"}>
              {property}
            </NavigationMenuTrigger>
            <NavigationMenuContent className={style.navigationContent}>
              <ul>
                {navList[property].map((e) => {
                  return (
                    <LinkItem title={e.title} href={e.href} key={e.title}>
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
