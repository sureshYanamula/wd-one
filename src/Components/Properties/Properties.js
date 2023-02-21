import React, { useState } from "react";

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
  return (
    <div>
      {details.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
        </div>
      ))}
      {/* <ReUsableButton></ReUsableButton> */}
      <button onClick={handleItems}>Click to add Items</button>
    </div>
  );
}

export default Properties;
