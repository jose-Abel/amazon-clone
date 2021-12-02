import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          
          <Route exact path="/" element={<Home />}/>

          <Route path="/checkout" element={<Checkout />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
