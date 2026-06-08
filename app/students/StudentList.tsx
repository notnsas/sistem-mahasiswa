import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "../services/session"
import { handleDeleteStudent } from "../actions/student"
import { Card, CardContent } from "@/components/ui/card"
type Gender = "Male" | "Female"
type Student = {
  id: number
  name: string
  npm: string
  alamat: string
  gender: Gender
}
// console.log('currentUser', currentUser)
const StudentList = async ({ students }: { students: Student[] }) => {
  const currentUser = await getCurrentUser()
  return (
    <Card className="border-outline-variant bg-surface-container-low">
      <CardContent className="pt-6">
        <Table>
          <TableCaption className="text-on-surface-variant">
            A list of your recent students.
          </TableCaption>
          <TableHeader>
            <TableRow className="border-outline-variant hover:bg-transparent">
              <TableHead className="w-[100px] text-on-surface-variant">
                Name
              </TableHead>
            <TableHead>NPM</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.npm}</TableCell>
              <TableCell>{student.alamat}</TableCell>
              <TableCell className="text-right">{student.gender}</TableCell>
              <TableCell className="text-right">
                {currentUser?.role === "admin" && (
                  <>
                    <Link href={`/students/edit?id=${student.id}`} className="mr-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <form
                      action={async () => {
                        "use server"
                        await handleDeleteStudent(student.id)
                      }}
                      className="inline"
                    >
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </form>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </CardContent>
    </Card>
  )
}

export default StudentList