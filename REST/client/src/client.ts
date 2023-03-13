import axios from "axios"

const client = axios.create({ baseURL: "http://localhost:3000" })

async function main() {
  

  const users = await Promise.all([
    client.get("rest/userbyId", { params: { id: "1" } }).then(res => res.data),
    client.get("rest/userbyId", { params: { id: "2" } }).then(res => res.data),
    client.get("rest/userbyId", { params: { id: "3" } }).then(res => res.data)
  ])
  console.log(users.map(user => user.name))

  const newUser = await client
    .post("rest/userCreate", { name: "Iyer"})
    .then(res => res.data)
  console.log(newUser)

  const newUserGot = await client
    .get("rest/userbyId", { params: { id: newUser.id } })
    .then(res => res.data)

  console.log(newUserGot)
}

main()