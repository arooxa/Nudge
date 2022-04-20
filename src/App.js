import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Game from "./pages/Game";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </AuthProvider>
    </Router>
    
  );
}

export default App;

