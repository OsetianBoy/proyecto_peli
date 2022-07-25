import { Listado } from "./components/Listado";


function App() {
  return (
    <div className="layout">
    {/*Cabecera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegacion */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* Contenido principal */}
    <section className="content">
        {/* lista de las peliculas */}
        <Listado/>
        
    </section>

    {/* <!-- Pie de pagina --> */}
    <footer className="footer">
        &copy; Elbrus Baskaev ES12 y TypeScript - <a href="ebaskaev.com">ebaskaev.com</a>
    </footer>

</div>
  );
}

export default App;
