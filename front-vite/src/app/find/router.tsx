import { Routes, Route } from "react-router-dom";

import KeywordRouter from "@/app/find/keyword/router";
import NotFound from "@/app/not-found/page";

export default function FindRouter() {
  return (
    <Routes>
      <Route path={"/:keyword/*"} element={<KeywordRouter />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
