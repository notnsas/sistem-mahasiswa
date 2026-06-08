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
    <div>
      {/* <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>{student.name}</Link>
            <p>NPM: {student.npm}</p>
            <p>Alamat: {student.alamat}</p>
            <p>Gender: {student.gender}</p>
          </li>
        ))}
      </ul> */}
      <div className="bg-[rgb(143,76,56)]">div</div>
      <div className="bg-primary text-on-primary">div</div>
      <Table>
      <TableCaption>A list of your recent students.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
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
              <Link href={`/students/edit?id=${student.id}`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
  )
}

export default StudentList