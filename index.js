import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notes from "./routes/notes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(notes);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `Server running on port http://localhost:${process.env.APP_PORT}`
  );
});
