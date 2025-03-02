import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedSeconds = String(seconds).padStart(6, '0');

  return (
    <div style={{ display: "flex", justifyContent: "center", fontSize: "2rem" }}>
      <i className="fa-regular fa-clock" style={{ marginRight: "10px", padding: "17px", border: "1px solid black", borderRadius: "4px", color: "#ffffff" ,backgroundColor: "#000000"}}></i>
      {formattedSeconds.split('').map((digit, index) => (
        <div key={index} style={{ margin: "0 5px", padding: "10px", border: "1px solid black", borderRadius: "4px", color: "#ffffff" ,backgroundColor: "#000000" }}>
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
