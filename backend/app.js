import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://alvinv295:xnHWpBkW1g3r7Mzk@cluster0.y6esqsz.mongodb.net/Blog?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Connected TO Database and Listening TO Port ${PORT}`)
  )
  .catch((err) => console.log(err));
