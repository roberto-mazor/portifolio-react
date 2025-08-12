import Card from './ProjectCard';
import './Projects.css';

function Projects() {
  const projetos = [
    {
      imagem: '/exemple.jpeg',
      titulo: 'Projeto 1',
      descricao: 'Descrição do projeto 1',
      link: 'https://meuprojeto1.com',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      imagem: '/exemple.jpeg',
      titulo: 'Projeto 2',
      descricao: 'Descrição do projeto 2',
      link: 'https://meuprojeto2.com',
      tags: ['React', 'Tailwind', 'API']
    },
    {
      imagem: '/exemple.jpeg',
      titulo: 'Projeto 3',
      descricao: 'Descrição do projeto 2',
      link: 'https://meuprojeto2.com',
      tags: ['React', 'Tailwind', 'API']
    },
    {
      imagem: '/exemple.jpeg',
      titulo: 'Projeto 4',
      descricao: 'Descrição do projeto 4',
      link: 'https://meuprojeto4.com',
      tags: ['Node.js', 'Express', 'MongoDB']
    },
    // Adicione mais projetos aqui!
  ];

  return (
    <section className="projetos" id="projetos">
      <h2>Projetos</h2>
      <div className="container">
        {projetos.map((projeto, index) => (
          <Card
            key={index}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
            tags={projeto.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
