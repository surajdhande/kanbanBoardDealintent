"use client";
import React, { useEffect, useState } from "react";
import Cards from "../cards/cards";
import "./todo.scss";
import axios from "axios";

interface TodoItem {
  name: string;
  description: string;
  _id: any;
}

const Todo: React.FC = () => {
  const [allData, setAllData] = useState<TodoItem[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3005/api/boards/getData?type=todo";

    axios
      .get(apiUrl)
      .then((response) => {
        setAllData(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  const showResult = () => {
    return allData?.map((e, index) => (
      <Cards name={e.name} description={e.description} key={index} id={e._id} />
    ));
  };

  return (
    <div className="todo-head">
      {" "}
      {allData.length > 0 ? (
        showResult()
      ) : (
        <div style={{ marginTop: "10px", fontSize: "18px" }}>No Data</div>
      )}
    </div>
  );
};

export default Todo;
