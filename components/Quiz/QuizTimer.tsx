import { useEffect  } from 'react';
import { padStartTime } from 'lib/timecheck';
import { useCountdown } from 'lib/hooks';
import { useQuiz } from '@components/Quiz/QuizContext';

const QuizTimer = ({
  timer,
  currentStage
}: {
  timer: number;
  currentStage: number;
}) => {
  const { setTimeExpired } = useQuiz();
  const { expired, seconds, minutes, setCountdown, startCountdown, clearCountdown} = useCountdown(timer);
  useEffect(() => {
    setCountdown(timer * 60 * 1000);
    return () => {
      clearCountdown();
    }
  }, [])

  useEffect(() => {
    setTimeExpired(false);
    clearCountdown();
    startCountdown(timer * 60 * 1000);
  }, [currentStage])

  useEffect(() => {
    if(expired) {
      setTimeExpired(true);
    }
  }, [expired])
  return (
    <p className='text-3xl'>
      <span className='bg-gray py-2 px-4 font-bold rounded-medium'>{padStartTime(minutes)}</span>
      <span className='text-5xl font-extrabold mx-2'>:</span>
      <span className='bg-gray py-2 px-4 font-bold rounded-medium'>{padStartTime(seconds)}</span>
    </p>
  )
}

export default QuizTimer;