import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Game from "./pages/Game";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

