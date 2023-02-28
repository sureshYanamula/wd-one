import React from "react";
import { useParams } from "react-router-dom";

function IdComponent() {
  const params = useParams();

  console.log(params, "params");
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Id page
            </li>
          </ol>
        </nav>
      </div>
      <h1>User id is: {params.id}</h1>
    </div>
  );
}

export default IdComponent;
