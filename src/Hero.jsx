import './Hero.css'

function Hero (){

    return(
            <section className="hero" id="inicio">
            <div className="hero-content">
                <h2>Bem-vindo ao meu portfólio!</h2>
                <img src="./public/perfil.jpeg" alt="Foto do Programador"/>
                <p>Desenvolvedor Front-End especializado em criar experiências
                    web incríveis.</p>
                <div className="links-rapidos">
                    <a href="https://github.com/roberto-mazor" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/roberto-de-souza-costa-569790175/" target="_blank">LinkedIn</a>
                    <a href="/.CV_Roberto_Mazor.pdf" download="CV_Roberto_Mazor.pdf" target="_blank">Currículo PDF</a>
                </div>
                <a href="#projetos" className="cta-button">Veja meus projetos</a>
            </div>
        </section>
    )
}

export default Hero