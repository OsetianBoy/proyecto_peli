import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titleComponent = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        
        //Consigo formulario(target) del evento
        let target = e.target;

        //Busco el indice del objeto de la peli a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //console.log(indice)

        //creo objeto con ese indice
        let peli_actualiza = {
            id,
            title: target.title.value,
            description: target.description.value
        };
        
        //actualizo elementos de ese indice
        pelis_almacenadas[indice] = peli_actualiza;

        //guardo el nuevo array en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        //actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titleComponent}</h3>

        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input 
                    type="text"
                    name="title"
                    className="titulo_editado"
                    defaultValue={peli.title}       
            />

            <textarea
                    name="description"
                    defaultValue={peli.description}
                    className="descripcion_editada"
            />

            <input type="submit" className="editar" value="Actualizar" />
        </form>
    </div>
  )
}
