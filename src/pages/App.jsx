import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import './App.css'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import NewBookForm from '../components/NewBookForm'
import BookList from '../components/BookList'
import Counters from '../components/Counters'
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useLocalStorage('search', '')
  const lastIdRef = useRef(3)
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('/books.json')
      .then(response => {
        if (!response.ok) throw new Error('Error loading books');
        return response.json();
      })
      .then(data => {
        setBooks(data);
      })
      .catch(err => {
        console.warn('books.json not found');
      });
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  const addBook = (newBook) => {
    const book = {
      id: ++lastIdRef.current,
      ...newBook
    }
    setBooks([...books, book])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <NewBookForm onAdd={addBook}/>
      <BookList books={filteredBooks} onRemove={removeBook} />
      <Counters total={books.length} filtered={filteredBooks.length} />
    </div>
  )
}

export default App
