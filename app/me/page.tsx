"use server"

import { auth } from "@/auth"
import { redirect } from "next/dist/client/components/navigation"
import { getCurrentUser } from "../services/session"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Me = async () => {
  const session = await auth()

  if (!session || !session.user?.email) {
    redirect("/login")
  }

  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <Card className="border-outline-variant bg-surface-container-low">
      <CardHeader>
        <CardTitle className="text-3xl">My Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg bg-surface-container px-4 py-3">
          <p className="text-sm text-on-surface-variant">Name</p>
          <p className="font-medium">{user.name}</p>
        </div>
        <div className="rounded-lg bg-surface-container px-4 py-3">
          <p className="text-sm text-on-surface-variant">Username</p>
          <p className="font-medium">{user.username}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Me
