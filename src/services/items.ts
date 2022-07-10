import axios from "axios";
import IItem from "../Models/IItems";



// function to get items from the backend
const getItems = async () => {
  const response = await axios.get<IItem[]>(`http://localhost:3001/items`);
  return response.data;
};

const postItem = async (item: Omit<IItem, "id">) => {
  const response = await axios.post<IItem>(`http://localhost:3001/items`, item, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export { getItems, postItem };
