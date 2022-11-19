import React, { useEffect, useState } from "react";
import Contador from "./contador.jsx";
import Botones from "./botones.jsx"



//create your first component
const Home = () => {
  useEffect(() => {
    //componentDidMount aqui//
    var interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  const [seconds, setSeconds] = useState(100000);
  

  return (
    <div className="container">
      <Contador seconds={seconds} />
      <Botones/>
    </div>
  );
};

export default Home;
