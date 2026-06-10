import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Luis Mauricio</h2>
            </div>

            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#tecnologias">Tecnologias</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;