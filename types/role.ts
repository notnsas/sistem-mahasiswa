export type Role = "user" | "admin"

export function toRole(value: unknown): Role {
  return value === "admin" ? "admin" : "user"
}
