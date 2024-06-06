// packages
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Routes, Route } from "react-router-dom";

// utils
import Layout from "@/components/layout/layout";
import RouteToSearch from "@/route-search";

// pages
import NotFound from "@/app/not-found/page";
import Home from "@/app/home/page";
import Search from "@/app/search/page";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path={"/"} element={<RouteToSearch />} />
          <Route path={"/home/*"} element={<Home />} />
          <Route path={"/search/*"} element={<Search />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
