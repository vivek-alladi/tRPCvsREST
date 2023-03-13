import { randomUUID } from "crypto"
import express from "express"

type User = {
  id: string
  name: string
}

const USERS: User[] = [
    { id: '1', name: 'gill' },
    { id: '2', name: 'kohli' },
    { id: '3', name: 'vihari' },
]

const router = express.Router()

router.get<{ id: string }>("/userbyId", (req, res) => {
  const user = res.json(USERS.find(user => user.id === req.query.id))

  return user
})

router.post<{ name: string; age: number }>("/userCreate", (req, res) => {
  const { name, age } = req.body
  const user: User = { id: randomUUID(), name }
  USERS.push(user)
  res.json(user)
})

export default router