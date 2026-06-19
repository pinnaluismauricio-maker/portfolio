import "./Contatos.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contato() {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>

      <p>
        Ficarei feliz em conversar sobre oportunidades,
        projetos ou tecnologia.
      </p>

      <div className="contact-links">

        <a
          href="pinnaluismauricio@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
          Email
        </a>

        <a
          href="https://github.com/pinnaluismauricio-maker"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/luis-maur%C3%ADcio-102383208/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Contato;