import db from "../db/db.js";
import dayjs from "dayjs";

export const notesDB = async (query, array) => {
  const [value] = await db.query(query, array === undefined ? [] : array);
  return value;
};

export const dateTime = () => {
  const date = dayjs().format("YYYY-MM-DD HH:mm:ss");
  return date;
};
