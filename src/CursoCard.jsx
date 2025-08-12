function CursoCard(props) {
  return (
    <div className="curso-card">
      <h4>{props.titulo}</h4>
      <p>{props.instituicao}</p>
    </div>
  );
}

export default CursoCard;
