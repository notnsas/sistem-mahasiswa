import { NextResponse } from "next/server"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { students } from "@/db/schema"
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (
  req: NextApiRequest,
  { params }: { params: Promise<{ id: number }> }
) => {
  console.log("GET request received with URL:", req.url)
  const id = (await params).id
  console.log("Extracted id from query:", id)
  const currentStudent = await db.query.students.findFirst({
    where: eq(students.id, id),
  })
  
  console.log("currentStudent:", currentStudent)
  return NextResponse.json(currentStudent)
} 