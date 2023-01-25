import { useState } from "react";

function Bottom({setTodoList, todoList}) {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if(text.trim() === "") return;
    setTodoList([...todoList, text]);
    setText("");
  };

  return (
    <>
      <div id="bottom">
        <div className="change">
          <button className="material-symbols-outlined">mood</button>
        </div>
        <div className="change">
          <button className="material-symbols-outlined">attach_file</button>
        </div>
        <input
          type="text"
          id="area"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo();
            }
          }}
        />
        <div className="change">
          {text === "" ? (
            <button className="material-symbols-outlined">mic</button>
          ) : (
            <button className="material-symbols-outlined" onClick={handleAddTodo}>send</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Bottom;
