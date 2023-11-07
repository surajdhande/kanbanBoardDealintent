"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Hello, TypeScript Node.js Server!");
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
