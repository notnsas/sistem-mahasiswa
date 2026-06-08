export type Gender = 'Male' | 'Female'

export interface Student {
  id: number
  name: string
  npm: string
  alamat: string
  gender: Gender
}