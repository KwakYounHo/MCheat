import { Routes, Route } from "react-router-dom";

import NOTFOUND from "@/components/404/page";
import HomeLayout from "@app/Home/_layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <HomeLayout>
              <p>루트페이지</p>
            </HomeLayout>
          }
        />
        <Route path={"*"} element={<NOTFOUND />} />
      </Routes>
    </>
  );
}

export default App;
