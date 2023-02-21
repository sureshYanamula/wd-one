import React from "react";
import "./ButtonComponent.css";

function ButtonComponent(props) {
  const handleComponentButton = () => {
    props.handleItems();
  };
  return (
    <button onClick={handleComponentButton} className="button-class">
      {props?.name}
    </button>
  );
}

export default ButtonComponent;
