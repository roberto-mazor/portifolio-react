import './Contact.css'

function Contact(){

    return(

        <section className="contato" id="contato">
            <div className="container">
                <h2>Contato</h2>
                <form id="contact-form">
                    <div className="form-group">
                        <label for="nome">Nome:</label>
                        <div className="input-icon">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" id="nome" name="nome" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="mensagem">Mensagem:</label>
                        <div className="input-icon">
                            <i className="fa-solid fa-comment"></i>
                            <textarea id="mensagem" name="mensagem"
                                required></textarea>
                        </div>
                    </div>
                    <button type="submit">Enviar via WhatsApp</button>
                </form>

                <div className="social-links">
                    <a href="https://github.com/seu-usuario" target="_blank">
                        <i className="fa-brands fa-github"></i>

                    </a>
                    <a href="https://linkedin.com/in/seu-usuario"
                        target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>

                <div id="form-feedback" className="form-feedback"></div>
            </div>
        </section>

    )
}

export default Contact