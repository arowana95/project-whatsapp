import { Context, useContext } from "./Context";
import Bottom from "./Bottom"
import Righty from "./Righty";

function Second() {

  const {todoList, setTodoList} = useContext(Context)
    
    return (
      <>
      <Righty/>
      <div id="text">{todoList.map((todo, index) => (<div key={index} className="texts">{todo}</div>))}</div>
      <Bottom setTodoList={setTodoList} todoList={todoList}/>
      </>
    );
  }
  
  export default Second;
