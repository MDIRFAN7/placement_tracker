import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentsPage from "./pages/StudentsPage";
import CompaniesPage from "./pages/CompaniesPage";
import PlacementsPage from "./pages/PlacementsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

