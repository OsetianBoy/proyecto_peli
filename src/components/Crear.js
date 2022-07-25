import React, { useState } from 'react'

export const Crear = ({ updateState }) => {

    const titleComponent = "Agregar pelicula";

    const [ peliState,setPeliState ] = useState({
        title: '',
        description: ''
    });

    //destructuracion del objeto
    const {title, description} = peliState;

    const getFormValues = e =>{
        e.preventDefault();

        //Tomo datos del formulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Creo objeto de la peli, guardo
        let peli ={
            id: new Date().getTime(),
            title,
            description
            
        };
        //guardo el estado
        setPeliState(peli);
        updateState(peli)

        //guardo en el local storage
        guardarEnStorage(peli);
        
        
    }
    
    const guardarEnStorage = peli =>{

        //consigo elementos q ya estan en el localStorage
        let items = JSON.parse(localStorage.getItem("pelis"));

        console.log(items);
                
        //compruebo si es array
        if(Array.isArray(items)){
            //Agrego un nuevo elemento al array
            items.push(peli);
        }else{
            //o creo un array con peli nueva
            items = [peli]; 
        }

        //guardo en el localStorage
        localStorage.setItem("pelis", JSON.stringify(items));     

        //devuelvo el objeto guardado
        return peli;

    };

  return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>

        <strong>
            {/* si se cumple esta condicion, mostrar titulo */}
            {(title && description) && "Has agregado una pelicula: "+title}
        </strong>

        <form onSubmit={getFormValues}>
            <input      type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Titulo"/>
                    
            <textarea 
                        id="description"
                        name="description" 
                        placeholder="Descripcion"></textarea>

            <input      type="submit"
                        id="save" 
                        value="Guardar"/>
        </form>
    </div>
  )
}
