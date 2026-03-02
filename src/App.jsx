import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VehiclePage from "./pages/VehiclePage";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vehicles/:id" element={<VehiclePage />} />
    </Routes>
  );
}

export default App;