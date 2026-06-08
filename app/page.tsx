import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  Shield,
  UserPlus,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: GraduationCap,
    title: "Student Directory",
    description:
      "Browse, search, and manage student records including name, NPM, address, and gender — all in one organized table.",
  },
  {
    icon: UserPlus,
    title: "Easy Registration",
    description:
      "Create new student entries with a simple form. Edit existing records anytime and keep your data up to date.",
  },
  {
    icon: Users,
    title: "User Accounts",
    description:
      "Secure login and registration for staff. Each user gets a personal profile and access to protected features.",
  },
  {
    icon: Shield,
    title: "Protected Access",
    description:
      "Only authenticated users can create or edit students. Your data stays safe behind session-based authentication.",
  },
]

const steps = [
  {
    step: "01",
    title: "Create an account",
    description: "Register with a username and password to get started.",
  },
  {
    step: "02",
    title: "Log in securely",
    description: "Sign in to unlock student management and profile features.",
  },
  {
    step: "03",
    title: "Manage students",
    description: "Add, view, and update student records from the dashboard.",
  },
]

const Home = () => {
  return (
    <div className="space-y-20 pb-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-primary-container px-8 py-16 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-tertiary/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface/60 px-4 py-1.5 text-sm font-medium text-on-primary-container backdrop-blur-sm">
            <BookOpen className="size-4" />
            Student Management System
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-on-primary-container sm:text-5xl">
            Manage your students with ease
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-primary-container/80">
            A web-based platform built for schools and administrators to
            organize student data, manage user accounts, and keep academic
            records accessible — securely and efficiently.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="px-6">
              <Link href="/students">View Students</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="px-6">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is this system */}
      <section className="space-y-6">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
            What is this system?
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            This application is a full-stack student management system developed
            as a final project. It helps administrators maintain a centralized
            database of students while providing secure user authentication for
            staff members.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-outline-variant bg-surface-container-low">
            <CardHeader>
              <CardTitle>For Administrators</CardTitle>
              <CardDescription>
                Add new students, update their information, and browse the
                complete student directory from a clean, easy-to-use interface.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-outline-variant bg-surface-container-low">
            <CardHeader>
              <CardTitle>For Registered Users</CardTitle>
              <CardDescription>
                Create an account, log in, and access your personal profile.
                Authenticated users can manage student records and explore the
                user directory.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
            Key Features
          </h2>
          <p className="mx-auto max-w-xl text-on-surface-variant">
            Everything you need to manage students and users in one place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-outline-variant bg-surface-container-low transition-colors hover:bg-surface-container"
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-tertiary-container text-on-tertiary-container">
                  <feature.icon className="size-5" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
            How it works
          </h2>
          <p className="mx-auto max-w-xl text-on-surface-variant">
            Get up and running in three simple steps.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-outline-variant bg-surface-container px-6 py-8 text-center"
            >
              <span className="text-3xl font-bold text-primary">
                {item.step}
              </span>
              <h3 className="mt-3 font-semibold text-on-surface">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="rounded-3xl border border-outline-variant bg-surface-container-high px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-on-surface">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-on-surface-variant">
          Log in to manage students or create a new account to join the
          platform.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/students">Browse Students</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
