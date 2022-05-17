import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Calendar from "./pages/Calendar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar/MainNav";
import ContextWrapper from "./contexts/CalendarContext/ContextWrapper";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Navbar/>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/home" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path="/calendar" element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            } />
            <Route path="/contact" element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            } />
          </Routes>
        </ContextWrapper>
      </AuthProvider>
    </Router>
    
  );
}

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="*" element={<Home/>}/>
//       </Routes>
//     </Router>
//     );
// }


export default App;

