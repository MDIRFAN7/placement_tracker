import CompanyList from "../components/CompanyList";

export default function CompaniesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Companies</h1>
      <CompanyList />
    </div>
  );
}
