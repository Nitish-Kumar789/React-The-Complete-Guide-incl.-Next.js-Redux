import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timeoutTimer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(intervalTimer);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
