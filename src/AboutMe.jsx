import './AboutMe.css'


function AbautMe() {

    return (
        <section className="sobre-mim" id="sobre-mim">
            <div className="container">
                <h2>Sobre Mim</h2>
                <div className="sobre-mim-content">
                    <div className="sobre-mim-image">
                        <img src="/perfil.png" alt="Foto de Roberto" />
                    </div>
                    <div className="sobre-mim-text">
                        <p>
                            Olá! Eu sou Roberto, um designer web e desenvolvedor
                            front-end apaixonado por transformar ideias em
                            experiências digitais envolventes.
                            Com foco em responsividade, acessibilidade e
                            performance, busco unir criatividade e tecnologia
                            para criar interfaces intuitivas e impactantes.
                        </p>
                        <p>
                            Tenho experiência com HTML, CSS, JavaScript, React e
                            ferramentas modernas de design.
                            Estou sempre aprendendo e explorando novas formas de
                            melhorar a experiência do usuário.
                        </p>
                    </div>
                    <div className="sobre-mim-icons">
                        <div className="icon">
                            <i className="fa-brands fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-react"></i>
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AbautMe