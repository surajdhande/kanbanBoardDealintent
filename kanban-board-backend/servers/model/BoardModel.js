"use strict";
// kanbanBoardModel.js
const mongoose = require('mongoose');

const kanbanBoardSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('KanbanBoard', kanbanBoardSchema);
