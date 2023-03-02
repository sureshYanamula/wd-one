import React from "react";
import { useSelector } from "react-redux";

function ComponentC(props) {
  console.log(props.name, "ComponentC");
  const { user } = useSelector((state) => ({ ...state }));

  console.log(user, "user");

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}

export default ComponentC;
