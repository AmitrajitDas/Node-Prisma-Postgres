const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

// This is the Default Route of the API
app.get("/", (req, res) => {
  res.send("API is running....")
})

async function main() {
  // const user = await prisma.user.create({
  //   data: { name: "gfsdgdsf", email: "sgsfgsfg" },
  // })
  // console.log(user)
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => await prisma.$disconnect())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
