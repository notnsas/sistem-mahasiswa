import { notFound } from "next/navigation"
import { getStudentById } from "../../services/students"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const StudentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const student = await getStudentById(Number(id))

  if (!student) {
    notFound()
  }

  return (
    <Card className="mx-auto max-w-lg border-outline-variant bg-surface-container-low">
      <CardHeader>
        <CardTitle className="text-2xl">{student.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg bg-surface-container px-4 py-3">
          <p className="text-sm text-on-surface-variant">NPM</p>
          <p className="font-medium">{student.npm}</p>
        </div>
        <div className="rounded-lg bg-surface-container px-4 py-3">
          <p className="text-sm text-on-surface-variant">Alamat</p>
          <p className="font-medium">{student.alamat}</p>
        </div>
        <div className="rounded-lg bg-surface-container px-4 py-3">
          <p className="text-sm text-on-surface-variant">Gender</p>
          <p className="font-medium">{student.gender}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default StudentPage
