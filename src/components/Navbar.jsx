import "../Styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">S
      <div className="container navbar-container">

        <div className="logo">
          <a href="/">
            <h2>RioCorretor</h2>
          </a>
        </div>

        <nav>
          <ul className="menu">
            <li><a href="#hero">Início</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;