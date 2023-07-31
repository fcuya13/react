import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="*" element={<notFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
