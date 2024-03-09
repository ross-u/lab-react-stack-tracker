import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";

function App() {

  
  return (
      <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/company/:companySlug" element={<CompanyPage />}></Route>
      <Route path="/tech/:slug" element={<TechnologyPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
