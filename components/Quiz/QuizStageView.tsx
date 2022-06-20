import { useState, useEffect } from 'react';
import useInput from 'utils/hooks/useInput';
import useCountdown from 'utils/hooks/useCountdown';

import Button from '@components/common/button';
import { QuestionCard, AnswerCard, QuizTimer } from '@components/Quiz';

const QUIZ_NUM = 10;

const QuizStageView = ({
  stage,
  setStage,
  limit
}: {
  stage: number;
  setStage: (stage:number) => void; // TODO 
  limit: number;
}) => {
  const {expired, seconds, minutes, setCountdown, startCountdown, clearCountdown} = useCountdown(limit);
  const answer = useInput('');
  const [error, setError] = useState('');
  const handleNextStage = () => {
    if((answer.attrs.value as string).length < 10) {
      console.log('errrrrr')
      setError('최소 10자 이상 입력해주세요.');
      setTimeout(() => {
        setError('')
      }, 3000)
      return;
    }

    // 단계가 끝났을 때 
    if(stage === QUIZ_NUM) {
      clearCountdown(); 
    }
    
    setStage(stage + 1);
    return;
  }

  useEffect(() => {
    console.log(minutes, 'outside');
    
  }, [minutes])
  
  useEffect(() => {
    setCountdown(limit * 60 * 1000);
  }, [])

  useEffect(() => {
    console.log(stage)
    if(!expired) {
      console.log('초과 안한 상황')
    }
    clearCountdown();
    if(stage <= QUIZ_NUM) {
      startCountdown(limit * 60 * 1000);
    }
  }, [stage])

  return (
    <section>
      <div className='flex justify-between items-center mb-10'>
        <p className='text-2xl font-bold'>
          <span className='text-blue'>#UserName</span>을 위해 문제를 랜덤으로 총 10개를 준비했어요.<br/>
          문제를 풀며 자가진단을 해보세요!
        </p>
        <QuizTimer seconds={seconds} minutes={minutes} />
      </div>
      <div className='flex flex-col gap-4 relative'>
        <QuestionCard
          maxStage={QUIZ_NUM} 
          stage={stage} 
          question={'RESTful API 란 무엇인가요? 설명해주세요'}
        />
        <AnswerCard {...answer.attrs} error={error} />
        {error ? <span className='text-error text-base absolute right-0 -bottom-8 text-right'>{ error }</span> : null }
        <Button
          className='font-bold p-4 px-6 self-end'
          onClick={handleNextStage}
        >다음 문제</Button>
      </div>
      
    </section>
  )
}

export default QuizStageView;