import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Node.js Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
