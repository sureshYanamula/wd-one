import React, { useState } from "react";
import ButtonComponent from "../ReusableComponents/ButtonComponent";
import ModelComponent from "../ReusableComponents/ModelComponent";
import Model from "../ReusableComponents/ModelComponent";

function Properties() {
  const [details, setDetails] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 5,
      title: "delectus aut autem",
      completed: false,
    },
  ]);

  const handleItems = () => {
    let data = [...details];
    data.push({
      userId: 10,
      id: Math.random(),
      title: "I am a web developer",
      completed: true,
    });
    setDetails(data);
  };

  const handleDetails = (id) => {
    console.log("handleDetails", id);
    let data = [...details];
    let filteredData = data.filter((item) => {
      return item.id !== id;
    });
    setDetails(filteredData);
  };

  // handleItems("suresh","mahesh")
  return (
    <div>
      {details.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <h1 style={{ marginRight: "30px", marginTop: "20px" }}>{item.id}</h1>
          <h1 style={{ marginRight: "30px", marginTop: "20px" }}>
            {item.title}
          </h1>
          <div style={{ marginRight: "30px", marginTop: "20px" }}>
            <ModelComponent handleDetails={handleDetails} id={item.id} />
          </div>
        </div>
      ))}
      <ButtonComponent handleItems={handleItems} name="Props Button" />
      {/* <button onClick={handleItems}>Click to add Items</button> */}
    </div>
  );
}

export default Properties;
