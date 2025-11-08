import StudentList from "../components/StudentList";

export default function StudentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Students</h1>
      <StudentList />
    </div>
  );
}
