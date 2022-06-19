import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import useCountdown from 'utils/hooks/useCountdown';

import { Container } from '@components/Layout';
import Button from '@components/common/button'
import { QuestionCard, AnswerCard, SetupQuiz } from '@components/Quiz';
import useInput from 'utils/hooks/useInput';



const MIN_MINUTES = 1;
const QUIZ_NUM = 10;

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
const QuizStage = ({
  stage,
  setStage,
  limit
}: {
  stage: number;
  setStage: (stage:number) => void; // TODO 
  limit: number;
}) => {
  const {expired, seconds, minutes, setCountdown, clearCountdown} = useCountdown(limit);
  const answer = useInput('');
  const handleNextStage = () => {
    if((answer.attrs.value as string).length < 10) {
      return;
    }
    if(stage === QUIZ_NUM) {
      clearCountdown(); 
    }
    setStage(stage + 1);
    return;
  }

  useEffect(() => {
    setCountdown(limit * 60 * 1000);
  }, [limit])

  useEffect(() => {
    // TODO : expired
  })

  useEffect(() => {
    clearCountdown();
    if(stage < QUIZ_NUM) {
      setCountdown(limit * 60 * 1000);
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
      <div className='flex flex-col gap-4'>
        <QuestionCard
          maxStage={QUIZ_NUM} 
          stage={stage} 
          question={'RESTful API 란 무엇인가요? 설명해주세요'}
        />
        <AnswerCard {...answer.attrs} />
        <Button
          className='font-bold p-4 px-6 self-end'
          onClick={handleNextStage}
        >다음 문제</Button>
      </div>
      
    </section>
  )
}

const DevQuiz: NextPage = () => {
  const [stage, setStage] = useState(0);
  const [limit, setLimit] = useState<number>(MIN_MINUTES);
  
  return (
    <Container>
      <Head>
        <title>1Hour - Dev Quiz</title>
      </Head>
      <div className='my-10'>
        header
      </div>
      {
        stage === 0 
          ? (
            <SetupQuiz stage={stage} setStage={setStage} setLimit={setLimit}/>
          ) : (
            <QuizStage stage={stage} setStage={setStage} limit={limit}/>
          )
      }
      
      <div>
        
      </div>
    </Container>
  );
};

export default DevQuiz;
