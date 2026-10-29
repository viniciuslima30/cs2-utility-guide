import express from "express";
import tiposRoutes from "./routes/tiposRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    res.status(200).json({"status": "ok"});
});

app.use("/api/v1", tiposRoutes);
app.use(errorHandler); // coloca middleware apos rota porque ele é executado na ordem que é declarado

export default app;