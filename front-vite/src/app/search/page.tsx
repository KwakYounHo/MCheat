import { Routes, Route } from "react-router-dom";
import SearchForm from "@/app/search/search-form/search";
import NotFound from "@/app/not-found/page";
import Find from "@/app/search/find/page";

export default function Search() {
  return (
    <Routes>
      <Route path={"/"} element={<SearchForm />} />
      <Route path={"/search/*"} element={<Find />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
