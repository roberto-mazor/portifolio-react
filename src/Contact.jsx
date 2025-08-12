import './Contact.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

function Contact() {
  const form = useRef();
  const [feedback, setFeedback] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jj15bpf',      // substitua pelo seu Service ID
      'template_obnceuu',     // substitua pelo seu Template ID
      form.current,
      'MN7t8o8IhxvGhwCGf'          // substitua pelo seu User ID
    ).then(
      () => {
        setFeedback('Mensagem enviada com sucesso!');
        form.current.reset();
      },
      (error) => {
        setFeedback('Erro ao enviar. Tente novamente mais tarde.');
        console.error(error);
      }
    );
  };

  return (
    <section className="contato" id="contato">
      <div className="container">
        <h2>Contato</h2>
              <form ref={form} onSubmit={sendEmail} id="contact-form">
                  <div className="form-group">
                      <label htmlFor="nome">Nome:</label>
                      <div className="input-icon">
                          <i className="fa-solid fa-user"></i>
                          <input type="text" id="nome" name="nome" required />
                      </div>
                  </div>

                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <div className="input-icon">
                          <i className="fa-solid fa-envelope"></i>
                          <input type="email" id="email" name="email" required />
                      </div>
                  </div>

                  <div className="form-group">
                      <label htmlFor="mensagem">Mensagem:</label>
                      <div className="input-icon">
                          <i className="fa-solid fa-comment"></i>
                          <textarea id="mensagem" name="mensagem" required></textarea>
                      </div>
                  </div>

                  <button type="submit">Enviar por Email</button>
              </form>


        <div className="social-links">
          <a href="https://github.com/seu-usuario" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div id="form-feedback" className="form-feedback">{feedback}</div>
      </div>
    </section>
  );
}

export default Contact;
