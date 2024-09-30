import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  console.log(min, sec);
  useEffect(() => {
    const timeId = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timeId);
  }, [dispatch]);
  return (
    <div className="timer">
      {min < 10 ? "0" : ""}
      {min}:{sec < 10 ? "0" : ""}
      {sec}
    </div>
  );
}

export default Timer;
