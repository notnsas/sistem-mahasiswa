"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createStudent } from "../../actions/student"
import { useNotification } from "../../components/NotificationContext"

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
    <div>
      <h2>Create a new student</h2>
      <form action={formAction}>
        <div>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Npm
            <input type="text" name="npm" />
          </label>
        </div>
        <div>
          <label>
            Alamat
            <input type="text" name="alamat" />
          </label>
        </div>
        <div>
          <label>
            Gender
            {/* <input type="text" name="gender" /> */}
            <select name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
        <button type="submit">Create</button>
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </form>
    </div>
  )
}

export default NewStudent