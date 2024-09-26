import express from "express";
import mongose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());

mongose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
