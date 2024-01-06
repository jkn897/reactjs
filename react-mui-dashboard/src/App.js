import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          {<Route path='/about' element={<About />} />}
          <Route path='/users' element={<Users />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;