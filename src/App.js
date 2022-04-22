import './App.css';

import Landing from './pages/landing';
import Explore from './pages/explore';
import About from './pages/about';

import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/explore' element={ <Explore /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
