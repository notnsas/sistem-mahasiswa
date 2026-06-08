"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createStudent } from "../../actions/student"
import { useNotification } from "../../components/NotificationContext"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// const selectClassName =
//   "h-8 w-full min-w-0 rounded-lg border border-outline bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/30 md:text-sm"

const NewStudent = () => {
  const [state, formAction] = useActionState(createStudent, {
    error: "",
    success: false,
  })
  const { showNotification } = useNotification()
  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      showNotification("student created")
      router.push("/students")
    }
  }, [state, showNotification, router])

  return (
    <div className="mx-auto max-w-lg">
      <Card className="border-outline-variant bg-surface-container-low">
        <CardHeader>
          <CardTitle>Create a new student</CardTitle>
          <CardDescription>
            Fill in the details below to add a student.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
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
              {/* <select id="gender" name="gender" className={selectClassName}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select> */}

              <Select name="gender">
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Genders</SelectLabel>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

            </div>
            {state.error && (
              <p className="rounded-lg bg-error-container px-3 py-2 text-sm text-on-error-container">
                {state.error}
              </p>
            )}
            <Button type="submit">Create</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default NewStudent
