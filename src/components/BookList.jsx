import BookItem from "../components/BookItem";

function BookList({ books, onRemove, onSeeDetails, loading }) {
  return (
    <div class="section">
      <h2>Lista</h2>
      <div className="book-list">
        {loading && (
          <p style={{ opacity: 0.6, margin: "5px" }}>Carregando...</p>
        )}

        {!loading &&
          books.map((b) => (
            <BookItem
              key={b.id}
              id={b.id}
              title={b.title}
              author={b.author}
              year={b.year}
              onRemove={onRemove}
              onSeeDetails={onSeeDetails}
            />
          ))}

        {!loading && books.length === 0 && (
          <p style={{ opacity: 0.6, margin: "5px" }}>
            Nenhum livro foi encontrado...
          </p>
        )}
      </div>
    </div>
  );
}

export default BookList;
