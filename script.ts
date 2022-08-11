// import { PrismaClient } from "@prisma/client"
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  // const user = await prisma.user.create({ data: { name: "Leo" } })
  // console.log(user)
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => await prisma.$disconnect())
