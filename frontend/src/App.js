import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import CountryInfo from "./pages/CountryInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/info/:code" element={<CountryInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
