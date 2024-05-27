// package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Main from "@/components/Main/page";
import NotFoundPage from "@/components/Fallback/page";

// style sheet
import "./index.css";

export default function App() {
  return (
    <div className={"text-foreground"}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}
