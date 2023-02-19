import React from "react";
import { useParams } from "react-router-dom";

function IdComponent() {
  const params = useParams();

  console.log(params, "params");
  return (
    <div>
      <h1>User id is: {params.id}</h1>
    </div>
  );
}

export default IdComponent;
