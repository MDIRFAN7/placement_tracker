import { useEffect, useState } from "react";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((err) => console.error("Error fetching companies:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Companies</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Company Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Package</th>
            <th className="border px-4 py-2">Eligibility CGPA</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c) => (
            <tr key={c.company_id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{c.name}</td>
              <td className="border px-4 py-2">{c.role}</td>
              <td className="border px-4 py-2">{c.package}</td>
              <td className="border px-4 py-2">{c.eligibility_cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
