import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Placement Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Students</Link>
        <Link to="/companies" className="hover:text-yellow-300">Companies</Link>
        <Link to="/placements" className="hover:text-yellow-300">Placements</Link>
      </div>
    </nav>
  );
}
