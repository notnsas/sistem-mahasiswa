import Link from "next/link"
import { getUsers } from "../services/users"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Users = async () => {
  const users = await getUsers()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface">
          Users
        </h2>
        <p className="text-on-surface-variant">
          All registered users in the system.
        </p>
      </div>

      <Card className="border-outline-variant bg-surface-container-low">
        <CardHeader>
          <CardTitle>User Directory</CardTitle>
          <CardDescription>
            Click a name to view their profile and blogs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-outline-variant">
            {users.map((user) => (
              <li key={user.id}>
                <Link
                  href={`/users/${user.username}`}
                  className="block rounded-lg px-3 py-3 transition-colors hover:bg-secondary-container hover:text-on-secondary-container"
                >
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default Users
