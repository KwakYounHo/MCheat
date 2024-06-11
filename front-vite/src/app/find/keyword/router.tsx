import { Routes, Route } from "react-router-dom";

import { KeywordContextProvider } from "./context/keyword";
import { ResultLengthContextProvider } from "./context/result-length";

import Keyword from "./page";
import NotFound from "@/app/not-found/page";

export default function KeywordRouter() {
  return (
    <KeywordContextProvider>
      <ResultLengthContextProvider>
        <Routes>
          <Route path={"/"} element={<Keyword />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </ResultLengthContextProvider>
    </KeywordContextProvider>
  );
}
