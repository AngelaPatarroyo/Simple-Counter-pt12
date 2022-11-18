import React, { useEffect, useState } from "react";
import Contador from "./contador.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  useEffect(() => {
    //componentDidMount aqui//
    var interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="container">
      <Contador seconds={seconds} />
    </div>
  );
};

export default Home;
