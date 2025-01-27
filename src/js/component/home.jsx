import React, { useEffect, useState } from "react";
import Contador from "./contador.jsx";
import Botones from "./botones.jsx";

// Componente principal
const Home = () => {
  const [seconds, setSeconds] = useState(100000); // Estado del contador
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar si está corriendo

  useEffect(() => {
    let interval;

    if (isRunning) {
      // Configurar el intervalo si isRunning es true
      interval = setInterval(() => {
        setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0)); // Disminuir el contador
      }, 1000);
    }

    // Limpiar el intervalo cuando el componente se desmonte o isRunning cambie
    return () => clearInterval(interval);
  }, [isRunning]); // Ejecutar cuando isRunning cambie

  // Función para iniciar el contador
  const handleStart = () => setIsRunning(true);

  // Función para detener el contador
  const handleStop = () => setIsRunning(false);

  return (
    <div className="container">
      {/* Pasar el estado seconds al componente Contador */}
      <Contador seconds={seconds} />
      {/* Pasar funciones y estado al componente Botones */}
      <Botones
        handleStart={handleStart}
        handleStop={handleStop}
        isRunning={isRunning}
      />
    </div>
  );
};

export default Home;
