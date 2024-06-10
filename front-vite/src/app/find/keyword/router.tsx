import { Routes, Route } from "react-router-dom";

import { KeywordContextProvider } from "./context/keyword";
import { ResultLengthContextProvider } from "./context/result-length";

import Keyword from "./page";
import NotFound from "@/app/not-found/page";
import Detail from "./detail/page";

export default function KeywordRouter() {
  return (
    <KeywordContextProvider>
      <ResultLengthContextProvider>
        <Routes>
          <Route path={"/"} element={<Keyword />} />
          <Route path={"/:id"} element={<Detail />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </ResultLengthContextProvider>
    </KeywordContextProvider>
  );
}
