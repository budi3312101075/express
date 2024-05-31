import express from "express";
import {
  addNotes,
  deleteNotes,
  getNote,
  getNotes,
  updateNotes,
} from "../controller/notes.js";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/note/:id", getNote);
router.post("/notes", addNotes);
router.patch("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);

export default router;
