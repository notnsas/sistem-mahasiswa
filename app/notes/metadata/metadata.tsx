import type { Metadata } from "next"
import { getNoteById } from "../../services/notes"

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> => {
  const { id } = await params
  const note = await getNoteById(Number(id))
  return {
    title: note ? note.content.slice(0, 50) : "Note not found",
  }
}