import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();

  const { data } = useSelector((state) => ({ ...state }));

  const handleNavigate = () => {
    navigate("/dashboard/12525");
  };
  return (
    <React.Fragment style={{ marginTop: "100px" }}>
      <button onClick={handleNavigate}>Navigate to id page</button>
      {data?.length
        ? data?.map((item) => <h1 key={item.id}>{item.title}</h1>)
        : null}
    </React.Fragment>
  );
}

export default Dashboard;
