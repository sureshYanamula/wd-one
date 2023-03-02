import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  console.log(props.name, "ComponentB");

  return (
    <div>
      <ComponentC name={props.name} />
    </div>
  );
}

export default ComponentB;
