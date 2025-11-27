import { useEffect, useRef } from 'react'

function SearchBar({search, setSearch}) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function updateSearch(event) {
    setSearch(event.target.value)
  }

  return(
    <div className="input">
      <p>Buscar: </p>
      <input style={{ width: "400px"}} ref={inputRef} type="text" onChange={updateSearch} value={search} placeholder="Buscar..." />
    </div>
  )
}

export default SearchBar