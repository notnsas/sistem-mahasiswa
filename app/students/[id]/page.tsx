import { notFound } from "next/navigation"
import { getStudentById } from "../../services/students"

const StudentPage = async ({ params }: { params: Promise<{ id: string }> }) => { 
  const { id } = await params
  const student = await getStudentById(Number(id))

  if (!student) {
    notFound()
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>NPM: {student.npm}</p>
      <p>Alamat: {student.alamat}</p>
      <p>Gender: {student.gender}</p>
    </div>
  )
}

export default StudentPage