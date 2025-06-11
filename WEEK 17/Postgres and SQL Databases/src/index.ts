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
    console.log("🎉 Successfully Connected to PostgreSQL Database!");
  } catch (err) {
    console.log('❌ Database connection or query error:', err);
  }
} 

main();

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { city, country, street, pincode } = req.body;

    const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1, $2, $3) RETURNING id;`;
    const values = [username, email, password];
    const response = await client.query(insertQuery, values);

    const user_id = response.rows[0].id;

    const addressInsertQuery = `INSERT INTO addresses (city,country,street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
    const addressValues = [city, country, street, pincode, user_id];
    const addressResponse = await client.query(addressInsertQuery, addressValues)

    console.log(response, addressResponse);
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

