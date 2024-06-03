// package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Search from "@/components/Search/page";
import NotFoundPage from "@/components/Fallback/page";
import RouteHome from "@/components/routeHome";

// style sheet
import "./index.css";

export default function App() {
  return (
    <div className={"text-foreground"}>
      <Router>
        <Routes>
          <Route path="/" element={<RouteHome />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}
