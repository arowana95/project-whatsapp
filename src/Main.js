import { useState } from "react";
import { Context } from "./components/Context";
import First from "./components/First";
import Second from "./components/Second";

function Main() {

  const [name , setName] = useState("John")
  const [todoList, setTodoList] = useState([]);

  const names = {
    name,
    todoList,
    setTodoList,
    setName
  }

  return (
    <Context.Provider value={names}>
      <div id="meaningless">
      <div id="double">
        <div id="first">
        <First/>
        </div>
        <div id="second">
        <Second/>
        </div>
      </div>
      </div>
    </Context.Provider>
  );
}

export default Main;