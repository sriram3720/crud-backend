const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js')
const studentRouter = require('./handlers/studentRouter.js');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api", studentRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
