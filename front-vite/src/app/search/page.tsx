import { Routes, Route } from "react-router-dom";
import SearchForm from "@/app/search/search-form/search";
import NotFound from "@/app/not-found/page";

export default function Search() {
  return (
    <Routes>
      <Route path={"/"} element={<SearchForm />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
