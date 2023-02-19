import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <button onClick={handleNavigate}>Navigate to Dashboard</button>
    </div>
  );
}

export default Home;
