"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
// import { addNote, toggleImportance } from "../services/notes"
import { addStudent, deleteStudent } from "../services/students"
import { auth } from "../../auth"
import { updateStudent } from "../services/students"
import * as z from "zod";
import { getCurrentUser } from "../services/session"

export const createStudent = async (
  prevState: { error: string; success?: boolean },
  formData: FormData,
) => {
  const session = await auth()
  const user = await getCurrentUser()
  if (!session || !user || user.role !== "admin") {
    redirect("/login")
  }

  const name = formData.get("name") as string
  const npm = formData.get("npm") as string
  const alamat = formData.get("alamat") as string
  const gender = formData.get("gender") as string

  if (!name || name.length < 2) {
    return {
      error: "Student name must be at least 2 characters long",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  if (!npm || npm.length < 10) {
    return {
      error: "Student npm must be at least 10 characters long",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  if (!alamat || alamat.length < 5) {
    return {
      error: "Student address must be at least 5 characters long",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  if (!gender) {
    return {
      error: "Please select a gender",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  const safeGender = z.enum(["Male", "Female"]).parse(gender)

  await addStudent(name, npm, alamat, safeGender )

  revalidatePath("/students")
  return { error: "", success: true }
}

export const handleUpdateStudent = async (
  prevState: { error: string; success?: boolean },
  formData: FormData,
) => {
  const session = await auth()
  const user = await getCurrentUser()
  if (!session || !user || user.role !== "admin") {
    redirect("/login")
  }

  const id = formData.get("id") as string
  const name = formData.get("name") as string
  const npm = formData.get("npm") as string
  const alamat = formData.get("alamat") as string
  const gender = formData.get("gender") as string

  if (!name || name.length < 2) {
    return {
      error: "Student name must be at least 2 characters long",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  if (!npm || npm.length < 10) {
    return {
      error: "Student npm must be at least 10 characters long",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  if (!alamat || alamat.length < 5) {
    return {
      error: "Student address must be at least 5 characters long",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  if (!gender) {
    return {
      error: "Please select a gender",
      values: { name, npm, alamat, gender },
      success: false,
    }
  }

  const safeGender = z.enum(["Male", "Female"]).parse(gender)

  await updateStudent(Number(id), name, npm, alamat, safeGender )

  revalidatePath("/students")
  return { error: "", success: true }
}

export const handleDeleteStudent = async (
  id: number
) => {
  const session = await auth()
  const user = await getCurrentUser()
  if (!session || !user || user.role !== "admin") {
    redirect("/login")
  }
  await deleteStudent(id)

  revalidatePath("/students")
  return
}
