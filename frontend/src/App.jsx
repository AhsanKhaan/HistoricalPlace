import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Home from './pages/Home';
import PlaceDetail from './pages/PlaceDetail';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app-body flex">
          <div className="main-content flex-1">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/place/:id" exact element={<PlaceDetail />} />
              <Route path="/"  element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
