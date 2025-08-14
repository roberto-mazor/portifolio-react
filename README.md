# Portfólio React - Roberto Mazor

Este é um portfólio profissional desenvolvido em [React](https://react.dev/) com [Vite](https://vitejs.dev/), apresentando projetos, formação, experiência e informações de contato.

## Funcionalidades

- **Menu responsivo:** Navegação adaptada para desktop e mobile.
- **Seção Hero:** Apresentação rápida com links para GitHub, LinkedIn e download do currículo.
- **Sobre Mim:** Breve descrição, habilidades e tecnologias.
- **Projetos:** Cards de projetos com imagem, descrição, tags e link externo.
- **Formação:** Linha do tempo de formação acadêmica e cursos complementares.
- **Experiência:** Cards com experiências profissionais.
- **Contato:** Formulário funcional via [EmailJS](https://www.emailjs.com/) e links para redes sociais.
- **Página 404:** Página personalizada para rotas não encontradas.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/)
- [Font Awesome](https://fontawesome.com/) (ícones)
- CSS Modules

## Estrutura do Projeto

```
src/
  ├── AboutMe.jsx / AboutMe.css
  ├── App.jsx / App.css
  ├── Contact.jsx / Contact.css
  ├── CursoCard.jsx
  ├── ExpCard.jsx
  ├── Experience.jsx / Experience.css
  ├── Footer.jsx / Footer.css
  ├── Formation.jsx / Formation.css
  ├── Hero.jsx / Hero.css
  ├── Menu.jsx / Menu.css
  ├── ProjectCard.jsx
  ├── Projects.jsx / Projects.css
  ├── pages/NotFound.jsx / NotFound.css
  └── main.jsx, index.css
public/
  ├── perfil.png
  ├── gb-image.jpeg
  ├── exemple.jpeg
  └── CV_TI_Roberto_de_Souza_Costa.pdf
```

## Instalação e Uso

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/roberto-mazor/portifolio-react.git
   cd portifolio-react
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse:**  
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Configuração do EmailJS

Para o formulário de contato funcionar, configure suas credenciais do EmailJS em [`Contact.jsx`](src/Contact.jsx):

```js
emailjs.sendForm(
  'service_xxxxxxx', // Service ID
  'template_xxxxxxx', // Template ID
  form.current,
  'user_xxxxxxxxxxxxx' // User ID
)
```

## Deploy

O projeto está pronto para deploy em serviços como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/).  
Para build de produção:

Hospedado em:
https://roberto-mazor.vercel.app/

```sh
npm run build
```

## Licença

[MIT](LICENSE)

---

Desenvolvido por Roberto Mazor.
