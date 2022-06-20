const QuizTimer = ({
  seconds, 
  minutes
}: {
  seconds: number;
  minutes: number;
}) => {
  return (
    <p className='text-3xl'>
      <span className='bg-gray py-2 px-4 font-bold rounded-medium'>{minutes}</span>
      <span className='text-5xl font-extrabold mx-2'>:</span>
      <span className='bg-gray py-2 px-4 font-bold rounded-medium'>{seconds}</span>
    </p>
  )
}

export default QuizTimer;