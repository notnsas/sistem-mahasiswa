import { pgTable, serial, text, pgEnum } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull().default(""),
  token: text("token").default(""),
})

export const genderEnum = pgEnum('gender', ['Male', 'Female']);

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  npm: text("npm").notNull(),
  name: text("name").notNull(),
  alamat: text("alamat").notNull(),
  gender: genderEnum("gender").notNull(),
})
