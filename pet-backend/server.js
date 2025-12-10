import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./config/mongodb.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ message: "Server running..." });
});

app.use("/api/v1", userRoutes);

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server listening on port ${PORT}`);
});
