"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { handleUpdateStudent } from "../../actions/student"
import { useNotification } from "../../components/NotificationContext"
import { useSearchParams } from "next/navigation"
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

const selectClassName =
  "h-8 w-full min-w-0 rounded-lg border border-outline bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/30 md:text-sm"

const EditStudent = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const [state, formAction] = useActionState(handleUpdateStudent, {
    error: "",
    success: false,
  })
  const { showNotification } = useNotification()
  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      showNotification("student updated")
      router.push("/students")
    }
  }, [state, showNotification, router])

  return (
    <div className="mx-auto max-w-lg">
      <Card className="border-outline-variant bg-surface-container-low">
        <CardHeader>
          <CardTitle>Edit Student</CardTitle>
          <CardDescription>Update the student information below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <input type="hidden" name="id" value={id ?? ""} />
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="npm">Npm</Label>
              <Input id="npm" type="text" name="npm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alamat">Alamat</Label>
              <Input id="alamat" type="text" name="alamat" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select id="gender" name="gender" className={selectClassName}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {state.error && (
              <p className="rounded-lg bg-error-container px-3 py-2 text-sm text-on-error-container">
                {state.error}
              </p>
            )}
            <Button type="submit">Update</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditStudent
