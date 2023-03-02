import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function ReduxComponent() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        console.log(resp.data);
        dispatch({
          type: "TYPICODE_DATA",
          payload: resp.data,
        });
        setData(resp.data);
      })
      .then((error) => {
        console.log(error, "error");
      });
  }, []);
  return <div>ReduxComponent</div>;
}

export default ReduxComponent;
