import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import IdComponent from "./Components/Dashboard/IdComponent";
import FormsComponent from "./Components/FormsComponent/FormsComponent";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import PropDrilling from "./Components/PropDrilling/PropDrilling";
import Properties from "./Components/Properties/Properties";
import ReduxComponent from "./Components/ReduxComponent/ReduxComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/dashboard/:id" element={<IdComponent />} />
        <Route path="/propdrilling" element={<PropDrilling />} />
        <Route path="/forms" element={<FormsComponent />} />
        <Route path="/redux" element={<ReduxComponent />} />
      </Routes>
    </div>
  );
}

export default App;
