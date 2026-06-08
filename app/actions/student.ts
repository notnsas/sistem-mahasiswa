"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
// import { addNote, toggleImportance } from "../services/notes"
import { addStudent } from "../services/students"
import { auth } from "../../auth"
import { updateStudent } from "../services/students"

export const createStudent = async (
  prevState: { error: string; success?: boolean },
  formData: FormData,
) => {
  const session = await auth()
  if (!session) {
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

  await addStudent(name, npm, alamat, gender )

  revalidatePath("/students")
  return { error: "", success: true }
}

export const handleUpdateStudent = async (
  prevState: { error: string; success?: boolean },
  formData: FormData,
) => {
  const session = await auth()
  if (!session) {
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

  await updateStudent(Number(id), name, npm, alamat, gender )

  revalidatePath("/students")
  return { error: "", success: true }
}

// export const toggleNoteImportance = async (formData: FormData) => {
//   const id = Number(formData.get("id"))
//   await toggleImportance(id)
//   revalidatePath(`/notes/${id}`)
//   revalidatePath("/notes")
// }