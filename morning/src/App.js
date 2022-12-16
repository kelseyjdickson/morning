import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Main/About";
import SignUp from "./components/Main/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
