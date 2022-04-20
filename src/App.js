import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import CountryDetailsPage from './pages/CountryDetailsPage';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/country/:countryId" element={<CountryDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
