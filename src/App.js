import "./App.css";
import HeaderH from "./components/Header-H";
import HeaderV from "./components/Header-V";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HeaderH />
      <div className="Home-container">
        <HeaderV />
        <Home />
      </div>
    </div>
  );
}

export default App;
