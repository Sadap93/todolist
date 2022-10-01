import { v4 as uuidv4 } from "uuid";

export const DUMMY_TODOS = [
  {
    title: "Főzés",
    date: new Date(2022, 10, 15),
    status: "success",
    id: uuidv4(),
  },
  {
    title: "Mosogatás",
    date: new Date(2022, 10, 16),
    status: "progress",
    id: uuidv4(),
  },
  {
    title: "Vasalás",
    date: new Date(2022, 10, 12),
    status: "progress",
    id: uuidv4(),
  },
];
