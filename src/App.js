import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import CustomersPage from './pages/customersPage';
import RentPage from './pages/rentPage';



function App() {
  

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/customers" element={<CustomersPage />} />
      <Route exact path="/rent" element={<RentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
