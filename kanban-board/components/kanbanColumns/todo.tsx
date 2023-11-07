"use client";
import React, { useEffect, useState } from "react";
import Cards from "../cards/cards";
import "./todo.scss";
import axios from "axios";

interface TodoItem {
  name: string;
  description: string;
  date: string;
}

const Todo: React.FC = () => {
  const [allData, setAllData] = useState<TodoItem[]>([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:3005/api/boards/getData"; // Replace with your API URL

    // Make a GET request when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        setAllData(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        // Handle any errors here
        console.error("API request error:", error);
      });
  }, []);

  const showResult = () => {
    return allData?.map((e, index) => (
      <Cards
        name={e.name}
        description={e.description}
        date={e.date}
        key={index} // Use index as the key since it should be unique
      />
    ));
  };

  return <div className="todo-head">{showResult()}</div>;
};

export default Todo;
