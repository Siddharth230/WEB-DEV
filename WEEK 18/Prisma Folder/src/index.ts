import express from 'express';
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.use(express());

app.get("/users", async (req,res) => {
  const users = await client.user.findMany();

  res.json({
    users
  })
})

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const users = await client.user.findFirst({
    where: {
      id: Number(id)
    },
    select: {
      username: true,
      todos: true
    }
  });

  res.json({
    users
  })
})



async function getUser() {
  const user = await client.user.findFirst({
    where: {
      id: 1
    },
    include: {
      todos: true
    }
  })

  console.log(user);
}
  
getUser();

app.listen(3000);