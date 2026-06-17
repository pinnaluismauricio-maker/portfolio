import "./Tecnologias.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import{ SiVite } from "react-icons/si";



function Tecnologias() {
    const tecnologias = [
        { 
        name: "HTML",
        icon: <FaHtml5/>,
        level: "Intermediário"
        }
        ,{
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "Intermediário",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "Intermediário",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "Básico",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      level: "Básico",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "Básico",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "Básico",
    },
        
    ];

    return (
       <section id="tecnologias" className="tecnologias">
        <h2>Tecnologias</h2>

        <div className="tecnologias-container">
            {tecnologias.map((tecnologia, index) => (
                <div key={index} className="tecnologia-item">
                    <span>{tecnologia.icon}</span>
                    <div className="tecnologia-info">
                        <h3>{tecnologia.name}</h3>
                        <p>{tecnologia.level}</p>
                    </div>
                </div>

            ))}
            </div>
         </section>
    );
}

export default Tecnologias;