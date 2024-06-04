import { ThemeProvider } from "@/components/theme/theme-provider";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path={"/"} element={<p>Hello wolrd :)</p>} />
      </Routes>
    </ThemeProvider>
  );
}
