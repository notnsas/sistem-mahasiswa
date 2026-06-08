import { NextResponse } from "next/server"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { students } from "@/db/schema"

export const GET = async (
  _: Request,
  { params }: { params: Promise<{ id: number }> }
) => {
  console.log("GET request received with URL:", req.url)
  const id = Number((await params).id)
  console.log("Extracted id from query:", id)
  const currentStudent = await db.query.students.findFirst({
    where: eq(students.id, id),
  })
  
  console.log("currentStudent:", currentStudent)
  return NextResponse.json(currentStudent)
} 