"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boards = [];
const router = express_1.default.Router();
const KanbanBoard = require("../model/BoardModel.js");


    // Create a new KanbanBoard document

router.post("/store", async (req, res) => {
  const { name, description, type } = req.body;
  try {
    const newBoard = new KanbanBoard({
      name,
      description,
      type

    });

    // Save the new board to MongoDB
    const savedBoard = await newBoard.save();
    console.log("saved Successfully");
    res.json(savedBoard);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Error saving to MongoDB" });
  }
});

// Route to create a new Kanban board
router.post("/create", (req, res) => {
  const { name, description,type } = req.body;
  const newBoard = {
    id: boards.length + 1,
    name,
    description,
    type
  };
  boards.push(newBoard);
  res.json(newBoard);
});



// Route to get a list of all Kanban boards
router.get("/getData", async(req, res) => {
    try {

    const { type } = req.query; 
    let query = {}; 
    
    if (type) {
      query.type = type;
    }
    
    const boards = await KanbanBoard.find(query);
        res.json(boards);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving boards' });
      }
});



// Route to update a Kanban board by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const boardToUpdate = boards.find((board) => board.id === id);
  if (!boardToUpdate) {
    return res.status(404).json({ message: "Board not found" });
  }
  boardToUpdate.name = name;
  boardToUpdate.description = description;
  res.json(boardToUpdate);
});



// Route to delete a Kanban board by ID
    router.delete("/:id", async(req, res) => {
        const boardId = req.params.id;
    
      try {
        const deletedBoard = await KanbanBoard.deleteOne({ _id: boardId });
    
        // const deletedBoard = await KanbanBoard.deleteOne({"_id": `ObjectId(${boardId})`});
        console.log(deletedBoard,"queryyyy")
        if (!deletedBoard) {
          return res.status(404).json({ message: 'Board not found' });
        }
        return res.json({ message: 'Board deleted' });
      } catch (error) {
        console.error(error);
        console.log(deletedBoard,"queryyyy")
    
        return res.status(500).json({ error: 'Error deleting board' });
      }

    });

exports.default = router;
