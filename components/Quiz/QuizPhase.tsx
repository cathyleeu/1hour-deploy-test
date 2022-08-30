import {useQuiz} from '@components/Quiz/QuizContext';
import { QuizStageView, SetupQuizView, QuizResultView } from '@components/Quiz';


interface Props {
  tags: Tag[]
}

export default function QuizPhase({tags}:Props) {
  const { phase } = useQuiz();
  return (
    <>
      {phase === 'SETUP' && <SetupQuizView tags={tags}/>}
      {phase === 'ONGOING' && <QuizStageView /> }
      {phase === 'FINISHED' && <QuizResultView /> }
    </>
  )
}