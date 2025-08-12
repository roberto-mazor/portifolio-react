function ExpCard(props) {
  return (
    <div className="exp-card">
      <div className="exp-icon"></div>
      <div className="exp-content">
        <h3>{props.cargo}</h3>
        <p><strong>Empresa:</strong> {props.empresa}</p>
        <p><strong>Período:</strong> {props.periodo}</p>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default ExpCard;
