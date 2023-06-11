import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine defaultCity="Oslo" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
