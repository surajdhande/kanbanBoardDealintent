"use client";
import Image from "next/image";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";
import Todo from "@/components/kanbanColumns/todo";
import Inprogress from "@/components/kanbanColumns/inProgress";
import Completed from "@/components/kanbanColumns/completed";
import Plus from "../images/plusIcon.png";
import CustomImage from "@/components/customImages/customImage";
import CustomModal from "@/components/modal/modal";

export default function Home() {
  const saveData = (
    event: React.MouseEvent<HTMLButtonElement>,
    data: string
  ) => {
    console.log(data);
  };
  const inProgress = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("its printing");
  };
  const completed = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("its printing");
  };

  return (
    <main className="main">
      <div className="header">
        <Navbar />
      </div>
      <div className="sections">
        <div className="sections-options">
          <div style={{ color: "blue" }}>Home</div>
          <div>Reports </div>
          <div>Issues</div>
          <div>Components</div>
        </div>
        <div className="sections-board">
          <span
            className="title"
            style={{ backgroundColor: "rgb(230, 83, 83)" }}
          >
            {" "}
            To Do
          </span>

          <CustomModal content="To Do" type="todo"/>

          <section className="board">
            <Todo />
          </section>
        </div>
        <div className="sections-board">
          <span
            className="title"
            style={{ backgroundColor: "rgb(231, 231, 80)" }}
          >
            {" "}
            In Progress
          </span>
          <CustomModal content="In Progress" type="inprogress"/>

          <section className="board">
            <Inprogress />
          </section>
        </div>
        <div className="sections-board">
          <span className="title" style={{ backgroundColor: "greenyellow" }}>
            {" "}
            Completed
          </span>
          <CustomModal content="Complete" type="completed"/>

          <section className="board">
            <Completed />
          </section>
        </div>
      </div>
    </main>
  );
}
