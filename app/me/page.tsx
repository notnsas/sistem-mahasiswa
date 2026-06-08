"use server"

import { auth } from "@/auth"
import { redirect } from "next/dist/client/components/navigation"
import { createToken } from "../actions/users"
// import { getUserWithReadingLists } from "../services/users"
import { getCurrentUser } from "../services/session"
import { handleMarkAsRead } from "../actions/readingLists"

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
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-white">
          My Profile
        </h1>

        <div className="space-y-3">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-sm text-gray-400">Name</p>
            <p className="text-white font-medium">
              {user.name}
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-sm text-gray-400">Username</p>
            <p className="text-white font-medium">
              {user.username}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me