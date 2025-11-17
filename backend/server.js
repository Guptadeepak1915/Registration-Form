// require('dotenv').config(); // we will write this line when the env file will be inside the backend directory 
require('dotenv').config({ path: '../.env' }); 
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 4552;
// connect to database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME 
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post("/submit-form", (req, res) => {
  console.log("📩 Data received:", req.body);
  // res.send("Form submitted successfully");
  const { name, registration, year, sem, mobile, section, email } = req.body;
//   const name = req.body.name;
// const registration = req.body.registration;
// const year = req.body.year;
// const sem = req.body.sem;
// const mobile = req.body.mobile;
// const section = req.body.section;
// const email = req.body.email;

  const sql = `INSERT INTO student_data (name, registration, year, sem, mobile, section, email)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, registration, year, sem, mobile, section, email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database insert failed');
    } else {
      res.send('Form submitted successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
