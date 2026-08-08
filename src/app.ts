import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// Simple health/example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Production v2 - CI/CD Working");
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "my-api",
  });
});

export default app;
