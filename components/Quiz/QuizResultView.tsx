import { useQuiz } from '@components/Quiz/QuizContext';
import withAuth, { withAuthProps } from 'lib/hooks/withAuth';
import Button from '@components/common/button';
import { QuestionCard, ResultCard } from '@components/Quiz';
import QuizHeader from './QuizHeader';


const QuizResultView = ({ auth }: withAuthProps) => {
  const { updatePhase, setCurrentStage, questions, answers, totalStage } = useQuiz();
  const handleBackStage = () => {
    setCurrentStage(0);
    updatePhase('SETUP');
  };

  return (
    <>
      <QuizHeader>
        <QuizHeader.Content>
          <span className="text-blue">{auth.displayName ?? '#UserName'}</span>님, 문제 결과를 확인하세요.
        </QuizHeader.Content>
        <QuizHeader.Side>
          <Button className="bg-blue font-bold p-4 px-6" onClick={handleBackStage}>
            다시 풀기
          </Button>
        </QuizHeader.Side>
      </QuizHeader>
      {questions.map((r, i) => (
        <div className="flex flex-col gap-4 relative my-12" key={i}>
          <QuestionCard maxStage={totalStage} stage={i + 1} question={r.question} />
          <div className="flex flex-col sm:flex-row gap-4">
            <ResultCard type="answer" content={answers[i].content} />
            <ResultCard type="other" content={r.answer} />
          </div>
        </div>
      ))}
    </>
  );
};

export default withAuth(QuizResultView);
