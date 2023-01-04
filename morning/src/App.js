import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Main/About";
import Register from "./components/Main/Register";
import Login from "./components/Main/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
