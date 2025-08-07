import './Formation.css'


function Formation (){

    return(
        <section className="formacao" id="formacao">
            <div className="container">
                <h2>Formação</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            
                        </div>
                        <div className="timeline-content">
                            <h3>Técnico em Desenvolvimento Web</h3>
                            <p>Instituição: Senac Americana</p>
                            <p>Ano: 2025 - Cursando</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                           
                        </div>
                        <div className="timeline-content">
                            <h3>Análise e Desenvolvimento de Sistemas</h3>
                            <p>Instituição: Fatec Americana</p>
                            <p>Ano: 2017 (Não concluido)</p>
                        </div>
                    </div>
                    
                </div>
                <div className="cursos-complementares">
                    <h3>Cursos Complementares</h3>
                    <div className="cursos-grid">
                      <div className="curso-card">
                        <h4>Skills para liderar</h4>
                        <p>SEBRAE – Julho/2024</p>
                      </div>
                      <div className="curso-card">
                        <h4>Certificação em Liderança, capacidade de aprender e resiliência</h4>
                        <p>PUCRS – Novembro/2021</p>
                      </div>
                      <div className="curso-card">
                        <h4>Boas práticas em desenvolvimento de software</h4>
                        <p>TIM Tec – Junho/2019</p>
                      </div>
                      <div className="curso-card">
                        <h4>Definições e objetivos da gestão de projetos</h4>
                        <p>FGV Online – Junho/2019</p>
                      </div>
                      <div className="curso-card">
                        <h4>Uso da TI no ambiente organizacional e nos negócios</h4>
                        <p>Unieducar – Junho/2019</p>
                      </div>
                      <div className="curso-card">
                        <h4>Processo de desenvolvimento de software</h4>
                        <p>Fundação Bradesco – Junho/2019</p>
                      </div>
                      <div className="curso-card">
                        <h4>Administração tecnológica (Ferramentas Microsoft Office)</h4>
                        <p>Euro Data – Julho/2008</p>
                      </div>
                    </div>
                  </div>
                  
            </div>

        </section>
    )
}

export default Formation