function BookItem({id, title, author, year, onRemove}) {
  return(
    <div className="book-item">
      <p> {title} - {author} ({year})</p>
      <button onClick={() => onRemove(id)}>Remover</button>
    </div>
  )
}

export default BookItem