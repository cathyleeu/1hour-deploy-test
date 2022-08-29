import { useInput } from 'lib/hooks';
import { IconText, NumberInput } from '.';
import Button from '@components/common/button';
import { useQuiz } from '@components/Quiz/QuizContext';
import TagList from '@components/common/tag-list';
import QuizHeader from './QuizHeader';
import withAuth, { withAuthProps } from 'lib/hooks/withAuth';

const MIN_MINUTES = 1;
const MAX_MINUTES = 7;
const MIN_QUIZ = 3;
const MAX_QUIZ = 10;

const fake = [
  'html',
  'jamstack',
  'javascript',
  'nestjs',
  'aspnet',
  'big-data',
  'bots',
  'reactjs',
  'c',
  'clojure',
  'cms',
  'dart',
  'django',
];

const SetupQuizView = ({ auth }: withAuthProps) => {
  const { setTimer, updatePhase, errorMessage, setError, generateQuestion, setQuizNum, setCurrentStage } = useQuiz();
  const time = useInput(MIN_MINUTES);
  const quiz = useInput(MIN_QUIZ);
  const startQuiz = () => {
    if (time.attrs.value < MIN_MINUTES || time.attrs.value > MAX_MINUTES) {
      setError(`
        최소 ${MIN_MINUTES}분 이상 이거나
        최대 ${MAX_MINUTES}분 이하 입니다.`);
      time.setValue(MIN_MINUTES);
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }
    setQuizNum(quiz.attrs.value as number)
    setTimer(time.attrs.value as number);
    updatePhase('ONGOING');
    setCurrentStage(1);
    generateQuestion(quiz.attrs.value as number);
  };
  return (
    <>
      <QuizHeader>
        <QuizHeader.Content>
          <span className="text-blue">{auth ? auth.displayName : '#미래의 원아우어'}</span>님,
          <br />
          북마크된 질문을 풀어보세요
        </QuizHeader.Content>
      </QuizHeader>

      <section className="my-4">
        <IconText src="/assets/images/quiz/bulb.png" className="mb-5">
          <p className="font-bold text-sm md:text-xl">아래의 태그에 속한 질문을 랜덤으로 풀어보세요.</p>
        </IconText>
        {/* <TagList value={fake} /> */}
      </section>

      <section className="flex justify-end relative">
        {errorMessage ? (
          <span className="text-error text-base absolute right-0 -bottom-8 text-right">{errorMessage}</span>
        ) : null}

        <NumberInput min={MIN_QUIZ} max={MAX_QUIZ} {...quiz.attrs}>
          <p className='text-white pl-2 mr-4'>문제</p>
        </NumberInput>

        <NumberInput min={MIN_MINUTES} max={MAX_MINUTES} {...time.attrs} error={errorMessage}>
          <p className='text-white pl-2'>분</p>
        </NumberInput>
        <Button className="bg-blue font-bold ml-4 px-4" onClick={startQuiz}>
          복습시작하기
        </Button>
      </section>
    </>
  );
};

export default withAuth(SetupQuizView);
