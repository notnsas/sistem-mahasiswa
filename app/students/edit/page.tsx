"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createStudent, handleUpdateStudent } from "../../actions/student"
import { useNotification } from "../../components/NotificationContext"
import NewStudent from "../new/page"
import { useSearchParams } from 'next/navigation'

const EditStudent = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log('id', id)
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
    <div>
      <h2>Edit Student</h2>
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
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
        <button type="submit">Update</button>
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </form>
    </div>
  )
}

export default EditStudent