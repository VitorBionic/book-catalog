function BookItem({ id, title, author, year, onRemove, onSeeDetails }) {
  return (
    <div className="book-item">
      <p>
        {" "}
        {title} - {author} ({year})
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => onSeeDetails(id)}>Ver Detalhes</button>
        <button onClick={() => onRemove(id)}>Remover</button>
      </div>
    </div>
  );
}

export default BookItem;
