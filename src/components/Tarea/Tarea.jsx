import React from 'react'
import { useState } from 'react'
import "./Tareas.css"

const Tarea = (props) => {
  const [modoEdit, setModoEdit]= useState(false)
  const [editText, setEditText] = useState("")

  const editar = () => {
    setModoEdit(true)
  }

  const manejarEdit = (event) => {
    setEditText(event.target.value)
  }
  
  const submitEdit = (event) => {
    event.preventDefault()
    props.editar(props.id, editText);
    setEditText("")
    setModoEdit(false);
  }

  const borrarTarea = () => {
    props.borrar(props.id)
  }
  return (
    <div>

    
      {
        !modoEdit ?
        <div className='tareas'>
            <span>{props.tarea}</span>
            <button onClick={editar} className='editar'>Editar</button>
            <button onClick={borrarTarea} className='borrar'>Borrar</button>
        </div>
        : 
        <form className='tareas-edit' onSubmit={submitEdit}>
          <input value={editText} onChange={manejarEdit}/>
          <button>Guardar</button>
        </form>
      }
          
    </div>
  )
}

export default Tarea