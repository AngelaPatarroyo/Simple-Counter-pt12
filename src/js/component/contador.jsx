import React from "react";

const Seconds = (props) => {
  return (
    <div id="second">
      <div id="main-box" className="mt-3 d-flex justify-content-center">
        <div className="bg-black px-5 py- rounded-4 text-white d-flex justify-content-center">
          <div className="border d-flex justify-content-center m-2">
            <i className="bi bi-clock-fill p-4 d-flex align-items-center" />
          </div>
          <div className="d-flex align-items-center border p-4 m-2">
            {Math.floor(props.seconds / 100000) % 10}
          </div>
          <div className="d-flex align-items-center border p-4 m-2">
            {Math.floor(props.seconds / 10000) % 10}
          </div>
          <div className="d-flex align-items-center border p-4 m-2">
            {Math.floor(props.seconds / 1000) % 10}
          </div>
          <div className="d-flex align-items-center border p-4 m-2">
            {Math.floor(props.seconds / 100) % 10}
          </div>

          <div className="d-flex align-items-center border p-4 m-2">
            {Math.floor(props.seconds / 10) % 10}
            {/* "% 10" para que se reinicie cada 10 */}
          </div>
          <div className="d-flex align-items-center border p-4 m-2">
            {(props.seconds / 1) % 10} {/* "/1" es la posición  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seconds;
