import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";

export function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const selectedBook = state.books.find((b) => id == b.id);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="detailsContainer">
      <div className="detailsRow"></div>
      <h1 style={{ margin: 0 }}>{selectedBook.title}</h1>
      <div className="detailsRow">
        <h2 style={{ margin: 0 }}>Escrito por: {selectedBook.author}</h2>
      </div>
      <div className="detailsRow">
        <h2 style={{ margin: 0 }}>Publicado em: {selectedBook.year}</h2>
      </div>

      <div className="detailsButton">
        <button style={{ width: 140 }} onClick={goBack}>
          Voltar
        </button>
      </div>
    </div>
  );
}
