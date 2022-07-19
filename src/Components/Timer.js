import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [time, isActive]);

  const myDiv = {
    width: "200px",
    height: "200px",
    border: "2px solid #cecece",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "blue"
  };

  const handleTime = () => {
    if (!isActive) {
      setIsActive(() => !isActive);
    }
  };

  const handleStop = () => {
    if (isActive) {
      setIsActive(() => !isActive);
    }
  };

  console.log(isActive);
  return (
    <>
      <div style={myDiv} onMouseEnter={handleTime} onMouseLeave={handleStop}>
        <div>
          <p>Timer will start when you enter the mouse into this div</p>
          <h1>{time} s</h1>
        </div>
      </div>
    </>
  );
};
