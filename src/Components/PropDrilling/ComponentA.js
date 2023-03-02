import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  console.log(props.name, "ComponentA");
  return (
    <div>
      <ComponentB name={props.name} />
    </div>
  );
}

export default ComponentA;
