import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-on-surface">
          Student Management
        </h1>
        <p className="max-w-xl text-on-surface-variant">
          Manage students, users, and profiles in one place.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-outline-variant bg-surface-container-low">
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <CardDescription>
              View and manage the student directory.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/students">Browse Students</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-outline-variant bg-surface-container-low">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Explore registered users and their blogs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="secondary">
              <Link href="/users">Browse Users</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
