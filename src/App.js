import { useState } from "react";
import TareaForm from "./components/TareaForm/TareaForm";
import "./app.css"
import Tarea from "./components/Tarea/Tarea";


function App() {
  const [listaTareas, setListaTareas] = useState([])

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas])
  }

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index)=> index !== id)
    setListaTareas(listaFiltrada)
  }
  const actualizarTarea = (id, tarea)  => {
    const listaActualizada = listaTareas.map((e, index)=>{
      if(index === id){
        e = tarea;
      }
      return e;
    })

    setListaTareas(listaActualizada);
  }
  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea}/>

      {listaTareas.map((data, index) =>
        <Tarea
        tarea={data}
        borrar={borrar}
        id={index}
        editar={actualizarTarea}
        />
      )}      
    </div>
  );
}

export default App;
