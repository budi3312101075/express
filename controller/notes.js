import { dateTime, notesDB } from "../utils/func.js";

export const getNotes = async (req, res) => {
  try {
    const data = await notesDB("SELECT * FROM notes");
    return res.status(200).json({ msg: "success", data: data });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await notesDB("SELECT * FROM notes WHERE id = ?", [id]);
    return res.status(200).json({ msg: "success", data: data });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const addNotes = async (req, res) => {
  const { title, note } = req.body;
  try {
    await notesDB("INSERT INTO notes (title,datetime, note) VALUES (?,?, ?)", [
      title,
      dateTime(),
      note,
    ]);
    return res.status(200).json({ msg: "add data success" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await notesDB("DELETE FROM notes WHERE id = ?", [id]);
    return res.status(200).json({ msg: "delete data success" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const updateNotes = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;
  try {
    await notesDB(
      "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?",
      [title, dateTime(), note, id]
    );
    return res.status(200).json({ msg: "update data success" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
