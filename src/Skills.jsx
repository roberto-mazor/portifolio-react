// Skills.jsx
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Ícones de Brands (Tecnologias)
import { 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faReact, 
    faBootstrap, 
    faFigma, 
    faNodeJs, 
    faLinux 
} from '@fortawesome/free-brands-svg-icons';

// Ícones Solid (Gerais / Conceitos)
import { 
    faDatabase, // Para MySQL
    faServer    // Para NoSQL / Backend 
} from '@fortawesome/free-solid-svg-icons';


// 💡 ESTRUTURA DE DADOS UNIFICADA 💡
// Unimos todas as habilidades em uma única matriz para remoção das categorias.
const allSkills = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Figma', icon: faFigma },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'MySQL', icon: faDatabase }, 
    { name: 'MongoDB', icon: faServer }, 
    { name: 'Linux', icon: faLinux },
];

function Skills() {
    return (
        <div className="software-skills-container">
            {/* O título <h3> Hard Skills </h3> permanece */}
            <h3>Softwares Skills</h3>
            
            {/* 💡 REMOVIDO: O mapeamento de 'skillsData' (categorias) foi removido. */}
            
            <div className="skills-grid">
                {/* 💡 Mapeia diretamente a lista de todas as habilidades. */}
                {allSkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                        <FontAwesomeIcon icon={skill.icon} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;