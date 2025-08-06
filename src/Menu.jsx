import'./Menu.css'


function Menu (){

return(
    <header>
            <button id="menu-toggle">☰</button>
            <nav className="menu" id="mobile-menu">
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre-mim">Sobre Mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#formacao">Formação</a></li>
                    <li><a href="#experiencia">Experiência</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
    </header>
)}

export default Menu