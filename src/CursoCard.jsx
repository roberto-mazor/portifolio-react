function CursoCard({ titulo, instituicao  }) {
  return (
    <div className="curso-card">
      <h4>{titulo}</h4>
      <p>{instituicao}</p>
    </div>
  );
}

export default CursoCard;
