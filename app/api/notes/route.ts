import { NextResponse } from "next/server"
import { getNotes } from "../../services/notes"

export const GET = async () => {
  const notes = await getNotes(false)
  console.log("Fetched notes:", notes)
  return NextResponse.json(notes)
} 