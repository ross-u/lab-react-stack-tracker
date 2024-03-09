import "./App.css";
import companies from './companies.json'
import technologies from './technologies.json'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
