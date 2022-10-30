import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import CustomersPage from './pages/customersPage';



function App() {
  

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/customers" element={<CustomersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
