import { useState } from "react";

function NewBookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const addBook = () => {
    if (!title.trim() || !author.trim() || !year.trim()) {
      return;
    }

    onAdd({
      title,
      author,
      year
    });

    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="section">
      <h2>Novo Livro</h2>

      <div className="input-list">
        <div className="input">
          <p>Título: </p>
          <input 
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="input">
          <p>Autor: </p>
          <input 
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>

        <div className="input">
          <p>Ano: </p>
          <input 
            type="text"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </div>

        <button onClick={addBook}>Adicionar</button>
      </div>
    </div>
  );
}

export default NewBookForm;