import CursoCard from './CursoCard';
import './Formation.css';

function Formation() {
  const cursos = [
    { titulo: 'Skills para liderar', instituicao: 'SEBRAE – Julho/2024' },
    { titulo: 'Certificação em Liderança, capacidade de aprender e resiliência', instituicao: 'PUCRS – Novembro/2021' },
    { titulo: 'Boas práticas em desenvolvimento de software', instituicao: 'TIM Tec – Junho/2019' },
    { titulo: 'Definições e objetivos da gestão de projetos', instituicao: 'FGV Online – Junho/2019' },
    { titulo: 'Uso da TI no ambiente organizacional e nos negócios', instituicao: 'Unieducar – Junho/2019' },
    { titulo: 'Processo de desenvolvimento de software', instituicao: 'Fundação Bradesco – Junho/2019' },
    { titulo: 'Administração tecnológica (Ferramentas Microsoft Office)', instituicao: 'Euro Data – Julho/2008' }
  ];

  return (
    <section className="formacao" id="formacao">
      <div className="container">
        <h2>Formação</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h3>Técnico em Desenvolvimento Web</h3>
              <p>Instituição: Senac Americana</p>
              <p>Ano: 2025 - Cursando</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>Instituição: Fatec Americana</p>
              <p>Ano: 2017 (Não concluído)</p>
            </div>
          </div>
        </div>

        <div className="cursos-complementares">
          <h3>Cursos Complementares</h3>
          <div className="cursos-grid">
            {cursos.map((curso, index) => (
              <CursoCard
                key={index}
                titulo={curso.titulo}
                instituicao={curso.instituicao}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formation;
