import express, { Request, Response, Router } from "express";

// Sample data to simulate a database
interface KanbanBoard {
  id: number;
  name: string;
  description: string;
  columns: string[];
}

const boards: KanbanBoard[] = [];
const kanbanBoardSchema = new mongoose.Schema({
  name: String,
  description: String,
  columns: [String],
});
const router: Router = express.Router();
const KanbanBoard = mongoose.model("KanbanBoard", kanbanBoardSchema);

// Route to create a new Kanban board
// router.post('/create', (req: Request, res: Response) => {
//   const { name, description } = req.body as { name: string; description: string };
//   const newBoard: KanbanBoard = {
//     id: boards.length + 1,
//     name,
//     description,
//     columns: [],
//   };
//   boards.push(newBoard);
//   res.json(newBoard);
// });
router.post("/create", async (req: Request, res: Response) => {
  const { name, description } = req.body;

  try {
    // Create a new KanbanBoard document
    const newBoard = new KanbanBoard({
      name,
      description,
      columns: [],
    });

    // Save the new board to MongoDB
    const savedBoard = await newBoard.save();
    console.log("saved successfully");

    res.json(savedBoard);
  } catch (error) {
    res.status(500).json({ error: "Error saving to MongoDB" });
  }
});

// Route to get a list of all Kanban boards
router.get("/check", (req: Request, res: Response) => {
  console.log("in apis ");
  res.json(boards);
});

// Route to update a Kanban board by ID
router.put("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const { name, description } = req.body as {
    name: string;
    description: string;
  };
  const boardToUpdate: KanbanBoard | undefined = boards.find(
    (board) => board.id === id
  );

  if (!boardToUpdate) {
    return res.status(404).json({ message: "Board not found" });
  }

  boardToUpdate.name = name;
  boardToUpdate.description = description;

  res.json(boardToUpdate);
});

// Route to delete a Kanban board by ID
router.delete("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const indexToRemove: number = boards.findIndex((board) => board.id === id);

  if (indexToRemove === -1) {
    return res.status(404).json({ message: "Board not found" });
  }

  boards.splice(indexToRemove, 1);
  res.json({ message: "Board deleted" });
});

export default router;
