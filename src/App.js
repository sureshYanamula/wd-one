import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import IdComponent from "./Components/Dashboard/IdComponent";
import FormsComponent from "./Components/FormsComponent/FormsComponent";
import NavBar from "./Components/NavBar/NavBar";
import Properties from "./Components/Properties/Properties";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/dashboard/:id" element={<IdComponent />} />
        <Route path="/forms" element={<FormsComponent />} />
      </Routes>
    </div>
  );
}

export default App;
