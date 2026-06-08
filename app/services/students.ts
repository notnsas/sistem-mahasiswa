import { eq } from "drizzle-orm"
import { db } from "../../db"
import { students } from "../../db/schema"
import { getCurrentUser } from "./session"
import { Gender } from "../types/student"

export const getStudents = async () => {
  return db.select().from(students)
}

export const getStudentById = async (id: number) => {
  const result = await db.select().from(students).where(eq(students.id, id))
  console.log('getStudentById result', result)
  return result[0]
}

export const updateStudent = async (id: number, name: string, npm: string, alamat: string, gender: Gender) => {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error("Not logged in")
  }

  await db.update(students).set({ name, npm, alamat, gender }).where(eq(students.id, id))
}

export const addStudent = async (name: string, npm: string, alamat: string, gender: Gender) => {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error("Not logged in")
  }
  
  await db.insert(students).values({ name, npm, alamat, gender })
}

