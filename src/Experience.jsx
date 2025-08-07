import './Experience.css'

function Experience(){

    return(

        <section className="experiencia" id="experiencia">
            <div className="container">
                <h2>Experiência</h2>

                <div className="exp-card">
                    <div className="exp-icon">
                    </div>
                    <div className="exp-content">
                        <h3>Analista COP Rede I</h3>
                        <p><strong>Empresa:</strong> Claro S.A.</p>
                        <p><strong>Período:</strong> 2019 - 2023</p>
                        <p>Monitoramento de rede HFC e análise de falhas técnicas.</p>
                    </div>
                </div>

                <div className="exp-card">
                    <div className="exp-icon">
                    </div>
                    <div className="exp-content">
                        <h3>Suporte Técnico</h3>
                        <p><strong>Empresa:</strong> Escola Municipal Caic Prof. Sylvino Chinelatto</p>
                        <p><strong>Período:</strong> 2017 - 2018</p>
                        <p>Suporte a hardware, redes e sistemas.</p>
                    </div>
                </div>
                <div className="exp-card">
                    <div className="exp-icon">
                    </div>
                    <div className="exp-content">
                        <h3>Assistente Administrativo</h3>
                        <p><strong>Empresa:</strong> Auto Escola Cillos</p>
                        <p><strong>Período:</strong> 2013 - 2015</p>
                        <p>Gestão de processos, atendimento ao cliente e organização de arquivos.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience