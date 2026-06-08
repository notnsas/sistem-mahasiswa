import { Suspense } from "react"
import StudentList from "./StudentList"
import { getStudents } from "../services/students"

const StudentPage = async () => {
  const students = await getStudents()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface">
          Students
        </h2>
        <p className="text-on-surface-variant">
          A directory of all registered students.
        </p>
      </div>
      <Suspense
        fallback={
          <p className="text-on-surface-variant">Loading students...</p>
        }
      >
        <StudentList students={students} />
      </Suspense>
    </div>
  )
}

export default StudentPage
