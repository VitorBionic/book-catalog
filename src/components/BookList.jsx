import BookItem from '../components/BookItem'

function BookList({books, onRemove}) {

  if (books.length === 0) {
    return (
      <div className="section">
        <h2>Lista</h2>
        <p style={{ opacity: 0.6, margin: "5px"}}>Nenhum livro encontrado.</p>
      </div>
    );
  }

  return(
    <div class="section">
      <h2>Lista</h2>
        <div className="book-list">
          {books.map(b => (
            <BookItem
              key={b.id}
              id={b.id}
              title={b.title}
              author={b.author}
              year={b.year}
              onRemove={onRemove}
            />
          ))}
        </div>
    </div>
  )
}

export default BookList