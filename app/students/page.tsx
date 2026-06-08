import Link from "next/link"
import { Suspense } from "react"
import StudentList from "./StudentList"
import { getStudents } from "../services/students"
// import { students } from "@/db/schema"

const StudentPage = async () => {
  const students = await getStudents()

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <div className="mb-4">
      </div>
      <Suspense fallback={<p>Loading students...</p>}>
        <StudentList students={students} />
      </Suspense>
      
    </div>
  )
}
export default StudentPage