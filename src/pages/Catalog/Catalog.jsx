import { useContext, useEffect, useRef, useState } from "react";
import BookList from "../../components/BookList";
import Counters from "../../components/Counters";
import Header from "../../components/Title";
import NewBookForm from "../../components/NewBookForm";
import SearchBar from "../../components/SearchBar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ThemeContext } from "../../context/ThemeContext";
import Title from "../../components/Title";
import { useNavigate, useNavigation } from "react-router-dom";

export function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useLocalStorage("search", "");
  const lastIdRef = useRef(3);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/books.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error loading books");
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        console.warn("books.json not found");
      });
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const addBook = (newBook) => {
    const book = {
      id: ++lastIdRef.current,
      ...newBook,
    };
    setBooks([...books, book]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
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
      />
      <Counters total={books.length} filtered={filteredBooks.length} />
    </div>
  );
}
