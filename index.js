import express from "express";
import bodyparser from "body-parser";

import usersRoutes from "./Routes/Users.js";

const app = express();
const PORT = 5000; //can be any number // used for backend

app.use(bodyparser.json()); // it says that we will be using json data in our whole applicatipn//javascript object notation

app.use("/users", usersRoutes);
app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
