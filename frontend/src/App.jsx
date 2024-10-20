import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PlaceDetail from './pages/PlaceDetail';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const { suggestions } = useSelector((state) => state.suggestedPlaces);
  return (
    
      <Router>
        <Header />
        <div className="app-body flex">
          <div className="main-content flex-1">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/place/:id" exact element={<PlaceDetail />} />
              <Route path="/"  element={<Home suggestions={suggestions}/>} />
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;
