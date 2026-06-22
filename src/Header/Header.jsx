import './Header.css';

function Header() {
    return (
        <header  id="home" className="header">
            <div className="header-content">
                <h1> Olá, eu sou <span>Luis Maurício</span></h1>

                <h2> Desenvolvedor Front-End</h2>

                <p> Meu nome é Luis Maurício, sou um desenvolvedor front-end apaixonado por criar experiências web incríveis, utilizando HTML, CSS, JavaScript, React e Vite para construir aplicações modernas e responsivas.
                 </p>

        <div className="buttons">
            <button> Projetos </button>
            <button> Contato </button>
        </div>
        </div>
        </header>
);
}

export default Header;