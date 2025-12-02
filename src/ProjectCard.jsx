function Card(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>

      {/* Renderiza as tags se existirem */}
      {props.tags && props.tags.length > 0 && (
        <div className="tags">
          {props.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Renderiza o link se existir */}
      {props.link && (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Ver Projeto
        </a>
      )}
      {props.link && (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Ver Projeto
        </a>
      )}
    </div>
  );
}

export default Card;
