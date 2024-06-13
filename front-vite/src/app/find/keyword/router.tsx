import { Routes, Route } from "react-router-dom";

import { KeywordContextProvider } from "@/utils//context/keyword";
import { SearchDataContextProvider } from "@/utils/context/search-data";

import Keyword from "./page";
import NotFound from "@/app/not-found/page";

export default function KeywordRouter() {
  return (
    <KeywordContextProvider>
      <SearchDataContextProvider>
        <Routes>
          <Route path={"/"} element={<Keyword />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </SearchDataContextProvider>
    </KeywordContextProvider>
  );
}
