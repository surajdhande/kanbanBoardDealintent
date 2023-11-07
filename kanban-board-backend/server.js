"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
const mongoose = require("mongoose");

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const boardRoutes_1 = __importDefault(require("./servers/routes/boardRoutes"));
const app = (0, express_1.default)();
const port = 3005;

let connectionString = `mongodb://${"suraj.dhande"}:${"cdsdwthgfgdei"}@${"127.0.0.1"}:${"46018"}/${"KanbanBoard"}?authSource=admin`;
mongoose.connect(connectionString, {
  useNewUrlParser: true, // Required for the new connection string parser
  useUnifiedTopology: true, // Required for the new Server Discover and Monitoring engine
});

// Check for connection errors
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB!");
});
console.log("in server.js file");
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/api/boards", boardRoutes_1.default);
app.listen(3005, () => {
  console.log(`Server is running on port 3005`);
  console.log("------------------------------------------")
});
