// Components
import SearchInput from "./components/SearchInput";
import InfoApi from "./components/InfoApi";
// CSS
import "./App.css";
// Custom Hook
import useDebounce from "./hooks/useDebounce";

function App() {
  const { loading, info, searchValue, handleInputChange } = useDebounce();

  return (
    <div className="App">
      <h1>Busca de Animes</h1>
      <SearchInput value={searchValue} onChange={handleInputChange} />
      {loading && <p>Carregando...</p>}
      {searchValue && <InfoApi info={info} />}
    </div>
  );
}

export default App;