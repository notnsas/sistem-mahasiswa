import { eq } from "drizzle-orm"
import { db } from "../../db"
import { users } from "../../db/schema"

export const getUsers = async () => {
  return db.query.users.findMany()
}

export const getUserWithUsername = async (username: string) => {
  console.log('getUserWithUsername called with username:', username)
  return db.query.users.findFirst({
    where: eq(users.username, username),
  })
}

export const getUserById = async (id: number) => {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  })
}

// export const getUserWithReadingLists = async (username: string) => {
//   return await db.query.users.findFirst({
//     where: eq(users.username, username),
//     with: { 
//       readingLists: {
//         with : {
//           blog: true
//         }
//       }
//     },
//   });
// }
