import React from 'react'
import { useState } from 'react'
import "./TareaForm.css"


const TareaForm = (props) => {
    const [inputText, setInputText] = useState("")
    const [validacion, setValidacion] = useState(true)

    const manejarFormulario = (event) => {
        setInputText(event.target.value)
        
    }

    const submit = (event) => {
        event.preventDefault()
        if(inputText.trim() !==""){
            props.nuevaTarea(inputText)
            setInputText("")
            setValidacion(true)
        }else {
            setValidacion(false)
        }
        
    }

    
    return (
        <div className='form'>
            <form onSubmit={submit}>
                <span>Añadir Tarea</span>
                <input value={inputText} onChange={manejarFormulario}/>
                <button>Añadir</button>
            </form>
            {
                !validacion &&
                <div className='error-input'>Añadir nueva tarea</div>
            }
        </div>
    )
}

export default TareaForm