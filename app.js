import express from "express";
import errorMiddleware from "./middlewares/Error.js";
import userRouter from "./routes/user.js";
import { connectDB } from "./config/database.js";
const app = express();

app.use("/user", userRouter);

connectDB();

app.listen(4000, () => console.log(`Server is working`));

app.use(errorMiddleware);
