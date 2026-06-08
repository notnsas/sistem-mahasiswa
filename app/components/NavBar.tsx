"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

const navLinkClass =
  "rounded-md px-3 py-1.5 text-on-surface transition-colors hover:bg-secondary-container hover:text-on-secondary-container"

export default function NavBar() {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-outline-variant bg-surface-container px-6 py-3 shadow-sm">
      <div className="flex items-center gap-1 text-sm font-medium">
        <Link className={navLinkClass} href="/">
          Home
        </Link>
        <Link className={navLinkClass} href="/students">
          Students
        </Link>
        <Link className={navLinkClass} href="/users">
          Users
        </Link>
        {session && (
          <>
            <Link className={navLinkClass} href="/students/new">
              Create New
            </Link>
            <Link className={navLinkClass} href="/me">
              My Profile
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        {session ? (
          <>
            <span className="text-on-surface-variant">
              {session.user?.name} logged in
            </span>
            <Button variant="destructive" size="sm" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link className={navLinkClass} href="/login">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  )
}
