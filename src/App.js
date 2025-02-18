import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Welcome from "./components/Welcome";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const displayAlert = (msg, type) => {
    setAlert({
      message: msg,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#f8f9fa";
      displayAlert("Dark mode enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#212529";
      displayAlert("Light mode enabled!", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="Textify"
        mode={mode}
        toggleMode={toggleMode}
        displayAlert={displayAlert}
      />
      <Alert alert={alert} />
      <Welcome />
      {/* <Routes>
          <Route
            exact
            path="/"
            element={ */}
      <div className="container my-3">
        <Textform
          heading="Enter text to process"
          mode={mode}
          displayAlert={displayAlert}
        />
      </div>
      {/* }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
