import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard/12525");
  };
  return (
    <div>
      <button onClick={handleNavigate}>Navigate to id page</button>
    </div>
  );
}

export default Dashboard;
