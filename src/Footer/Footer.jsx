import './Footer.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {2026} Luis Maurcio - Desenvolvedor Front-End <br></br>
      React • JavaScript • CSS • Vite
      </p>

    </footer>
  );
}

export default Footer;