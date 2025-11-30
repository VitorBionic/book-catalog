import { useEffect, useRef } from "react";

function SearchBar({ search, setSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="input">
      <h3>Buscar: </h3>
      <input
        style={{ width: "400px", marginLeft: 12 }}
        ref={inputRef}
        type="text"
        onChange={updateSearch}
        value={search}
        placeholder="Buscar..."
      />
    </div>
  );
}

export default SearchBar;
