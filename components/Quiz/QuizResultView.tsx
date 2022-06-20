import { useState, useEffect } from 'react';
import { RandomQuizList } from 'lib/utils';

import Button from '@components/common/button';
import { QuestionCard, ResultCard } from '@components/Quiz';

const QUIZ_NUM = 10;

function rand(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const QuizResultView = () => {
  
  const handleBackStage = () => {
    console.log('???')
  }

  const random = Array.from({length: 10}, (_, i) => rand(1, RandomQuizList.length));

  return (
    <section>
      <div className='flex justify-between items-center mb-10'>
        <p className='text-2xl font-bold'>
          <span className='text-blue'>#UserName</span>님, 문제 결과를 확인하세요.
        </p>
        <Button
          className='font-bold p-4 px-6 self-end'
          onClick={handleBackStage}
        >다음 풀기</Button>
      </div>
      {
        random.map((r, i) => (
          <div className='flex flex-col gap-4 relative' key={i}>
            <QuestionCard
              maxStage={QUIZ_NUM} 
              stage={i + 1} 
              question={RandomQuizList[r].question}
            />
            <div className='flex gap-2'>
              <ResultCard type="other" content={RandomQuizList[r].answer}/>
              <ResultCard type="answer" content='모르겠음 ㅜ ㅜ'/>
            </div>
          </div>
        ))
      }
      
      
    </section>
  )
}

export default QuizResultView;