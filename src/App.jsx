import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import ManagePage from "./pages/ManagePage";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f0f0f0" }}>
        <Link to="/agendar">Agendar Turno</Link>
        <Link to="/gestionar">Gestionar Citas</Link>
      </nav>
      <Routes>
        <Route path="/agendar" element={<SchedulePage />} />
        <Route path="/gestionar" element={<ManagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
