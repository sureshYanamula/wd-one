import React, { useState } from "react";
import ComponentA from "./ComponentA";
import { useDispatch } from "react-redux";

function PropDrilling() {
  const [name, setName] = useState("Suresh");
  const dispatch = useDispatch();

  const handleSendData = () => {
    dispatch({
      type: "NAME",
      payload: name,
    });
  };

  return (
    <div>
      <ComponentA name={name} />
      <button onClick={handleSendData}>Send data to redux store</button>
    </div>
  );
}

export default PropDrilling;
