import { ThemeProvider } from "@/components/theme/theme-provider";
import { Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/layout";
import Home from "@/app/home/page";
import NotFound from "@/app/not-found/page";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
