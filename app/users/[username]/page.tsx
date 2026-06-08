import { getUserWithUsername } from "../../services/users"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const UserPage = async ({
  params,
}: {
  params: Promise<{ username: string }>
}) => {
  const { username } = await params
  const decodedUsername = decodeURIComponent(username)
  const user = await getUserWithUsername(decodedUsername)
  console.log("Fetched user:", user)
  return (
    <div className="space-y-6">
      <Card className="border-outline-variant bg-surface-container-low">
        <CardHeader>
          <CardTitle className="text-2xl">{user?.name}</CardTitle>
          <CardDescription>@{user?.username}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default UserPage