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
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Currículo PDF</a>
                </div>
                <a href="#projetos" className="cta-button">Veja meus projetos</a>
            </div>
        </section>
    )
}

export default Hero