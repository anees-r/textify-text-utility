import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="Textify" />
      <div className="container my-3">
        <Textform heading="Enter text to process" />
      </div>
    </>
  );
}

export default App;
