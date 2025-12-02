import { useContext, useEffect, useRef, useState } from "react";
import BookList from "../../components/BookList";
import Counters from "../../components/Counters";
import NewBookForm from "../../components/NewBookForm";
import SearchBar from "../../components/SearchBar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Title from "../../components/Title";
import { useNavigate} from "react-router-dom";

export function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useLocalStorage("search", "");
  const [ lastId, setLastId ] = useLocalStorage("lastId", 3);
  const [ savedBooks, setSavedBooks ] = useLocalStorage("savedBooks", []);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/books.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error loading books");
        return response.json();
      })
      .then((data) => {
        setBooks([...data, ...savedBooks]);
      })
      .catch((err) => {
        console.warn("books.json not found");
      });
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const addBook = (newBook) => {
    const book = {
      id: lastId + 1,
      ...newBook,
    };
    setLastId(lastId + 1)
    setBooks([...books, book]);
    setSavedBooks([...savedBooks, book])
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    setSavedBooks(savedBooks.filter((book) => book.id !== id))
  };

  const seeDetails = (id) => {
    navigate(`/catalog/book/${id}`, { state: { books } });
  };

  return (
    <div className="displayContainer">
      <Title />
      <SearchBar search={search} setSearch={setSearch} />
      <NewBookForm onAdd={addBook} />
      <BookList
        books={filteredBooks}
        onRemove={removeBook}
        onSeeDetails={seeDetails}
        loading={loading}
      />
      <Counters total={books.length} filtered={filteredBooks.length} />
    </div>
  );
}
