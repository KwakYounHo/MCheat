export interface NavList {
  search: NavItems[];
  main: NavItems[];
  support: NavItems[];
}

interface NavItems {
  title: string;
  href: string;
  descriptiion: string;
}

export const navList: NavList = {
  search: [
    {
      title: "s-search",
      href: "/search",
      descriptiion:
        "Check for accounts and phone numbers with a history of scam",
    },
    {
      title: "s-registration",
      href: "/register",
      descriptiion: "Please share the details of the scam with others",
    },
  ],
  main: [
    {
      title: "home",
      href: "/home",
      descriptiion: "Check the latest news and our infomation",
    },
    {
      title: "FAQ/Help",
      href: "/help",
      descriptiion: "Need some help? We are here to assist you!",
    },
    {
      title: "contact",
      href: "/contact",
      descriptiion: "Got any questions? Feel free to reach out to us!",
    },
  ],
  support: [
    {
      title: "support",
      href: "/support",
      descriptiion: "Did we help you? Please support us!",
    },
  ],
};
