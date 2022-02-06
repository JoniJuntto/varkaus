import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
