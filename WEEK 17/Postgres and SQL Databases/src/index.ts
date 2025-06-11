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
    const addressInsertQuery = `INSERT INTO addresses (city,country,street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;


    await client.query("BEGIN;");

    const values = [username, email, password];
    const response = await client.query(insertQuery, values);

    const user_id = response.rows[0].id;

    const addressValues = [city, country, street, pincode, user_id];
    const addressResponse = await client.query(addressInsertQuery, addressValues)
    
    await client.query("COMMIT;");

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

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = `SELECT username,email,id FROM users WHERE id=$1`;
  const response1 = await client.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
  const response2 = await client.query(query2, [id]);

  res.json({
    user: response1.rows[0],
    addresses: response2.rows
  })
})

app.get("/better-metadata", async (req, res) => {
  const id = req.query.id;

  const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users LEFT JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1;`
  const response = await client.query(query, [id]);
    
  console.log(response.rows)
  res.json({
    response: response.rows
  })
})

app.listen(3000);

