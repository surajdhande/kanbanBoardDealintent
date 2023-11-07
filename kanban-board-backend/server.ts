import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./servers/routes/boardRoutes";

const app = express();
const port = 3005;
console.log("in server.js file");
app.use(cors());
app.use(bodyParser.json());

app.use("/api/boards", router);

app.listen(3005, () => {
  console.log(`Server is running on port 3005`);
});
