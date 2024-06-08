// packages
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// utils
import Layout from "@/components/layout/layout";
import RouteToSearch from "@/route-search";

// pages
import NotFound from "@/app/not-found/page";
import Home from "@/app/home/page";
import Search from "@/app/search/page";
import Register from "@/app/register/page";

import "./app.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Routes>
              <Route path={"/"} element={<RouteToSearch />} />
              <Route path={"/home/*"} element={<Home />} />
              <Route path={"/search/*"} element={<Search />} />
              <Route path={"/register"} element={<Register />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}
