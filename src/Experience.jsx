import ExpCard from './ExpCard';
import './Experience.css';

function Experience() {
  const experiencias = [
    {
      cargo: 'Analista COP Rede I',
      empresa: 'Claro S.A.',
      periodo: '2019 - 2023',
      descricao: 'Monitoramento de rede HFC e análise de falhas técnicas.'
    },
    {
      cargo: 'Suporte Técnico',
      empresa: 'Escola Municipal Caic Prof. Sylvino Chinelatto',
      periodo: '2017 - 2018',
      descricao: 'Suporte a hardware, redes e sistemas.'
    },
    {
      cargo: 'Assistente Administrativo',
      empresa: 'Auto Escola Cillos',
      periodo: '2013 - 2015',
      descricao: 'Gestão de processos, atendimento ao cliente e organização de arquivos.'
    }
  ];

  return (
    <section className="experiencia" id="experiencia">
      <div className="container">
        <h2>Experiência</h2>
        {experiencias.map((exp, index) => (
          <ExpCard
            key={index}
            cargo={exp.cargo}
            empresa={exp.empresa}
            periodo={exp.periodo}
            descricao={exp.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
