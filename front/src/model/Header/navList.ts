export interface NavItem {
  name: string;
  to: string;
  tag: string;
}

export const navList: NavItem[] = [
  {
    name: "s-search",
    to: "/search",
    tag: "search",
  },
  {
    name: "s-registration",
    to: "/register",
    tag: "search",
  },
  {
    name: "home",
    to: "/home",
    tag: "main",
  },
  {
    name: "FAQ/Help",
    to: "/help",
    tag: "main",
  },
  {
    name: "contact",
    to: "/contact",
    tag: "main",
  },
  {
    name: "support",
    to: "/support",
    tag: "support",
  },
];
