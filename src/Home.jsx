import "./App.css";
const Home = () => {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
  });

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">Logo</a>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <button className="navbar-toggle">
          <span className="toggle-icon"></span>
        </button>
      </nav>

      <div className="wrapper">
        <h1 className="glitch">Glitch</h1>
      </div>
    </>
  );
};

export default Home;
