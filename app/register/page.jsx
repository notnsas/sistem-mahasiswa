"use client"

import { registerUser } from "../actions/users"
import { useActionState, useEffect } from "react"
import { useRouter } from "next/dist/client/components/navigation"
import { useNotification } from "@/app/components/NotificationContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function RegisterPage() {
  const [state, formAction] = useActionState(registerUser, {
    error: "",
    success: false,
    values: { username: "", name: "", password: "", passwordConfirm: "" },
  })
  const { showNotification } = useNotification()
  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      showNotification("User registered", "success")
      router.push("/login")
    } else if (state.error) {
      showNotification(state.error, "error")
    }
  }, [state, showNotification, router])

  return (
    <div className="mx-auto max-w-md">
      <Card className="border-outline-variant bg-surface-container-low">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                defaultValue={state.values?.username}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                defaultValue={state.values?.name}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                defaultValue={state.values?.password}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Confirm Password</Label>
              <Input
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                defaultValue={state.values?.passwordConfirm}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
