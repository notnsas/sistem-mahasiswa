import Link from "next/link"
import { getUserWithUsername } from "../../services/users"
import {
  Card,
  CardContent,
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
  const user = await getUserWithUsername(username)

  return (
    <div className="space-y-6">
      <Card className="border-outline-variant bg-surface-container-low">
        <CardHeader>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <CardDescription>@{user.username}</CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-on-surface">Blogs</h3>
        {user.blogs.length === 0 ? (
          <p className="text-on-surface-variant">No blogs yet.</p>
        ) : (
          <div className="grid gap-4">
            {user.blogs.map((blog) => (
              <Card
                key={blog.id}
                className="border-outline-variant bg-surface-container"
              >
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="text-primary hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-on-surface-variant">{blog.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserPage
