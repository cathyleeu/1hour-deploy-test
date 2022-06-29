import { useState, useEffect, useRef } from "react";
import { getTimeDifference, TimeDifferenceType } from "../timecheck";


export interface UseCountdownReturns {
  expired: boolean;
  minutes: number;
  seconds: number;
}

const initialDiff = {minutes : 0, seconds : 0, time: 0}
const useCountdown = (initialTime?:number) => {
  const [countdown, setCountdown] = useState(initialTime);
  const [timeDifference, setTimeDifference] = useState<TimeDifferenceType>(initialDiff);
  const timeInterval = useRef<ReturnType<typeof setInterval>>();
  const [expired, setExpired] = useState(false);
  
  const startCountdown = (timeLimit: number) => {
    let sec = 1000;
    timeInterval.current = setInterval(() => {
      const difference = getTimeDifference(timeLimit - sec);
      
      setTimeDifference(difference)
      sec = sec + 1000;

      if(difference.time < 0) {
        setExpired(true);
        clearInterval(timeInterval.current);
      }
    }, 1000)
  }

  const clearCountdown = () => {
    setTimeDifference(initialDiff);
    clearInterval(timeInterval.current);
  }

  useEffect(() => {
    if(!countdown) return;

    clearInterval(timeInterval.current);
    setExpired(false);
    startCountdown(countdown);
    
    return () => {
      clearInterval(timeInterval.current);
    }
  }, [countdown]);

  return {
    expired,
    setCountdown,
    startCountdown,
    clearCountdown,
    ...timeDifference
  };
};

export default useCountdown;