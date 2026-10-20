import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import DailyGames from './pages/dailygames';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dailygames" element={<DailyGames />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
