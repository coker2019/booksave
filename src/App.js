import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/bookSave/" element={<Home />} />
          <Route path="/bookSave/categories" element={<Categories />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">&copy; 2023 BookSave | Developed by Maurice Coker</p>
      </footer>
    </>
  );
}

export default App;
