import {useQuiz} from '@components/Quiz/QuizContext';

import Button from '@components/common/button';
import { QuestionCard, ResultCard } from '@components/Quiz';

const QUIZ_NUM = 10;


const QuizResultView = () => {
  const {updatePhase, setCurrentStage, questions, answers} = useQuiz();
  const handleBackStage = () => {
    setCurrentStage!(0);
    updatePhase!('SETUP');
  }

  return (
    <section>
      <div className='flex justify-between items-center mb-10'>
        <p className='text-2xl font-bold'>
          <span className='text-blue'>#UserName</span>님, 문제 결과를 확인하세요.
        </p>
        <Button
          className='font-bold p-4 px-6 self-end'
          onClick={handleBackStage}
        >다시 풀기</Button>
      </div>
      {
        questions.map((r, i) => (
          <div className='flex flex-col gap-4 relative my-12' key={i}>
            <QuestionCard
              maxStage={QUIZ_NUM} 
              stage={i + 1} 
              question={r.question}
            />
            <div className='flex gap-4'>
              <ResultCard type="other" content={r.answer}/>
              <ResultCard type="answer" content={answers[i].content}/>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default QuizResultView;
