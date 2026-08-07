import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// Simple health/example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Production");
});

export default app;
