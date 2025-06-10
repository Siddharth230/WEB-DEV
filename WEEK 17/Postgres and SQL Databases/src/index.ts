import express from "express";
import { Client } from "pg";
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(express.json());

const client = new Client({
  connectionString: process.env.POSTGRES_DATABASE
});

async function main() {
  try {
    await client.connect();
    console.log("🎉 Successfully connected to PostgreSQL Database!");
  } catch (err) {
    console.log('❌ Database connection or query error:', err);
  }
} 

main();

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1, $2, $3);`;
    const values = [username, email, password];
    
    const response = await client.query(insertQuery, values);

    console.log(response);

    res.json({
      message: "You have signed up"
    })
  } catch (err) {
    console.log(err);
    res.json({
      message: "Error while signing up"
    })
  }
})

app.listen(3000);

