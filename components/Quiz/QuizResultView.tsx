import { RandomQuizList, generateRandom } from 'lib/utils';

import Button from '@components/common/button';
import { QuestionCard, ResultCard } from '@components/Quiz';

const QUIZ_NUM = 10;


const QuizResultView = ({
  setStage,
  setPhase
}: {
  setPhase: (phase:string) => void;
  setStage: (stage:number) => void;
}) => {
  
  const handleBackStage = () => {
    setStage(0);
    setPhase('setup');
  }
  const random = generateRandom(RandomQuizList.length, QUIZ_NUM);

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
        random.map((r, i) => (
          <div className='flex flex-col gap-4 relative my-12' key={i}>
            <QuestionCard
              maxStage={QUIZ_NUM} 
              stage={i + 1} 
              question={RandomQuizList[i].question}
            />
            <div className='flex gap-4'>
              <ResultCard type="other" content={RandomQuizList[i].answer}/>
              <ResultCard type="answer" content='모르겠음 ㅜ ㅜ'/>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default QuizResultView;