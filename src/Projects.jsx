import './Projects.css'

function Projects(){

    return(
        <section className="projetos" id="projetos">
            <h2>Projetos</h2>
            <div className="container">
                <div className="card">
                    <img src="public/exemple.jpeg" alt="Projeto 1"/>
                    <h3>Projeto 1</h3>
                    <p>Descrição do Projeto 1 e tecnologias usadas.</p>
                    <div className="tags">
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">JavaScript</span>
                    </div>
                    <a href="#" target="_blank">Ver Projeto</a>
                </div>
                <div className="card">
                    <img src="public/exemple.jpeg" alt="Projeto 2"/>
                    <h3>Projeto 2</h3>
                    <p>Descrição do Projeto 2 e tecnologias usadas.</p>
                    <div className="tags">
                        <span className="tag">React</span>
                        <span className="tag">Node.js</span>
                    </div>
                    <a href="#" target="_blank">Ver Projeto</a>
                </div>
                <div className="card">
                    <img src="public/exemple.jpeg" alt="Projeto 3"/>
                    <h3>Projeto 3</h3>
                    <p>Descrição do Projeto 3 e tecnologias usadas.</p>
                    <div className="tags">
                        <span className="tag">Vue.js</span>
                        <span className="tag">Firebase</span>
                    </div>
                    <a href="#" target="_blank">Ver Projeto</a>
                </div>
                <div className="card">
                    <img src="public/exemple.jpeg" alt="Projeto 4"/>
                    <h3>Projeto 4</h3>
                    <p>Descrição do Projeto 4 e tecnologias usadas.</p>
                    <div className="tags">
                        <span className="tag">Angular</span>
                        <span className="tag">TypeScript</span>
                    </div>
                    <a href="#" target="_blank">Ver Projeto</a>
                </div>
            </div>
        </section>
    )
}

export default Projects