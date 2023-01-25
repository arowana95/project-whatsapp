import { Context, useContext } from "./Context";

function Righty() {

  const {name} = useContext(Context)

  return (
    <div id="righty">
      <div className="tail">
        <div id="pic"></div>
        <div className="text">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="tail"> 
        <div>
          <span className="material-symbols-outlined">search</span>
        </div>
        <div>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>  
    </div>   
  )
}

export default Righty;