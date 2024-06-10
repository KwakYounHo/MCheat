import { Routes, Route } from "react-router-dom";
import SearchPage from "@/app/search/main/page";
import NotFound from "@/app/not-found/page";

export default function SearchRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<SearchPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
