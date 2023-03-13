import express from "express"
import cors from "cors"
import UserRoute from "./routers/users"

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req,res) => res.send("Hello "))
app.use("/rest", UserRoute)

app.listen(3000)