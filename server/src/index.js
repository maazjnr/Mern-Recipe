import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Maazjnr:junior22@recipes.ivc2esv.mongodb.net/?retryWrites=true&w=majority"
);

const PORT = 3001;
app.use('/auth', userRouter);

app.listen(PORT, (req, res) => {
  console.log(`App listening on ${PORT}`);
});

