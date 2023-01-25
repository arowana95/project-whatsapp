import { Context, useContext } from "./Context";

function People({person , text , hour}) {

  const {setName} = useContext(Context)
  const {setTodoList} = useContext(Context)

  function handleClick() {
    setName(person)
    setTodoList([])
  }

    return (
      <button onClick={handleClick}>
      <div id="card">
        <div id="pic"></div>
        <div id="iden">
            <div className="text">
                <h3>{person}</h3>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
        <div id="clock">
            <p id="hour">{hour}</p>
        </div>
      </div>
      </button>
    );
  }
  
  export default People;