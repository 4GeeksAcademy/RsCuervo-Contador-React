import React from 'react'

const SecondsCounter = ({seconds}) => {
  const formattedSeconds = String(seconds).padStart(6, "0");
  return (
    <div className="digitos">
      <div className="icono">
        <i className="far fa-clock"></i>
      </div>
      {formattedSeconds.split("").map((digit, index) => (
        <div key={index} className={`digito digito${index}`}>
          {digit}
        </div>
      ))}
    </div>
  );
};
 

export default SecondsCounter