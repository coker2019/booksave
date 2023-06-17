import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

// import Navigation from './components/NavBar';
import Categories from './pages/categories';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>
    </Router>
  );
}

export default App;
