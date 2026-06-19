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
        }
        ,{
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Vite",
      icon: <SiVite />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />
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