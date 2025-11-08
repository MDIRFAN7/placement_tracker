import { useEffect, useState } from "react";

export default function PlacementList() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/placements")
      .then((res) => res.json())
      .then((data) => setPlacements(data))
      .catch((err) => console.error("Error fetching placements:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Placement Results</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Student</th>
            <th className="border px-4 py-2">Company</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {placements.map((p, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{p.student}</td>
              <td className="border px-4 py-2">{p.company}</td>
              <td className="border px-4 py-2">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
