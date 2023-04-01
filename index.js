import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from 'cors';
import userRouter from "./router/users.router.js"
import toolsRouter from "./router/tools.router.js";

dotenv.config();
const app = express();
const client = new MongoClient(process.env.MONGO_URL);
await client.connect();
console.log("Mongo is Connected!...")

const PORT = process.env.PORT;

app.use(cors())

app.use(express.json())

app.get("/", function (request, response) {
  response.send("Hello World");
});

app.use("/users", userRouter);
app.use("/tool", toolsRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client }
