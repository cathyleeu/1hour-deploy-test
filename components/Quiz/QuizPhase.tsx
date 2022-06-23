import {useQuiz} from '@components/Quiz/QuizContext';
import { QuizStageView, SetupQuizView, QuizResultView } from '@components/Quiz';


export default function QuizPhase() {
  const { phase } = useQuiz();
  return (
    <>
      {phase === 'SETUP' && <SetupQuizView />}
      {phase === 'ONGOING' && <QuizStageView /> }
      {phase === 'FINISHED' && <QuizResultView /> }
    </>
  )
}