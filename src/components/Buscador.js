import React from "react";

export const Buscador = ({ filterItems }) => {
  const getFormValues = e =>{
    e.preventDefault();

    //Tomo datos del formulario
    let title = e.target.title.value;
    
    //guardo el estado
    filterItems(title)
    
    
}

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <form onSubmit={getFormValues}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <button>Buscar</button>
      </form>
    </div>
  );
};
