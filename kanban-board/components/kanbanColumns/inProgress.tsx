import React, { useEffect, useState } from "react";
import Cards from "../cards/cards";
import "./styleSheet.scss";
import axios from "axios";

interface TodoItem {
  name: string;
  description: string;
  _id: any;
}

const Inprogress: React.FC = () => {
  const [allData, setAllData] = useState<TodoItem[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3005/api/boards/getData?type=inprogress";

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
    return allData?.map((e) => (
      <Cards
        name={e.name}
        description={e.description}
        id={e._id}
        key={e.name}
      />
    ));
  };

  return (
    <div className="head">
      {allData.length > 0 ? (
        showResult()
      ) : (
        <div style={{ marginTop: "10px", fontSize: "18px" }}>No Data</div>
      )}
    </div>
  );
};

export default Inprogress;
