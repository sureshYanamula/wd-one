import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import IdComponent from "./Components/Dashboard/IdComponent";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<IdComponent />} />
      </Routes>
    </div>
  );
}

export default App;
