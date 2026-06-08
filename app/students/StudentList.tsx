import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Gender = "Male" | "Female"
type Student = {
  id: number
  name: string
  npm: string
  alamat: string
  gender: Gender
}

const StudentList = ({ students }: { students: Student[] }) => {
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
              <TableHead className="text-on-surface-variant">NPM</TableHead>
              <TableHead className="text-on-surface-variant">Alamat</TableHead>
              <TableHead className="text-on-surface-variant">Gender</TableHead>
              <TableHead className="text-right text-on-surface-variant">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                className="border-outline-variant"
              >
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.npm}</TableCell>
                <TableCell>{student.alamat}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/students/edit?id=${student.id}`}>
                      <Button variant="secondary" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
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
