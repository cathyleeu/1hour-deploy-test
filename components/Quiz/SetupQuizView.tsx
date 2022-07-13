import { useState } from 'react';

import { useInput } from 'lib/hooks';
import { IconText, TimerInput } from '.';
import Button from '@components/common/button';
import { useQuiz } from '@components/Quiz/QuizContext';

const MIN_MINUTES = 1;
const MAX_MINUTES = 7;
const fake = [
  'gatsby',
  'google-chrome',
  'html',
  'jamstack',
  'javascript',
  'nestjs',
  'architecture',
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

const TagButton = ({ content }: { content: string }) => {
  const [isSelected, setSelected] = useState(false);
  const handleToggle = () => {
    setSelected(!isSelected);
  };
  // h-fit w-fit
  return (
    <button
      onClick={handleToggle}
      className={`
        text-base px-4 py-2 rounded-medium text-white
        ${isSelected ? 'bg-blue' : 'bg-gray-light'}
      `}
    >
      {content}
    </button>
  );
};

const SetupQuizView = () => {
  const { setTimer, updatePhase, errorMessage, setError, generateQuestion } = useQuiz();
  const time = useInput(MIN_MINUTES);

  const startQuiz = () => {
    if (time.attrs.value < MIN_MINUTES || time.attrs.value > MAX_MINUTES) {
      setError!(`
        최소 ${MIN_MINUTES}분 이상 이거나
        최대 ${MAX_MINUTES}분 이하 입니다.`);
      time.setValue(MIN_MINUTES);
      setTimeout(() => {
        setError!('');
      }, 2000);
      return;
    }

    setTimer!(time.attrs.value as number);
    updatePhase!('ONGOING');
    generateQuestion!();
    // generate quiz
    // go quiz
  };
  return (
    <section>
      <p className="text-2xl font-bold mb-10">
        <span className="text-blue">#미래의 원아우어</span>님,
        <br />
        {/* 북마크된 질문을 풀어보세요 */}
      </p>

      <IconText src="/assets/images/quiz/bulb.png" className="mb-5">
        <p className="font-bold text-xl">아래의 태그에 속한 질문을 랜덤으로 풀어보세요.</p>
      </IconText>

      <div className="flex flex-wrap gap-3 my-4">
        {fake.map((f: string, i: number) => (
          <TagButton key={i} content={f} />
        ))}
      </div>

      <div className="flex justify-end relative">
        {errorMessage ? (
          <span className="text-error text-base absolute right-0 -bottom-8 text-right">{errorMessage}</span>
        ) : null}
        <TimerInput min={MIN_MINUTES} max={MAX_MINUTES} {...time.attrs} error={errorMessage} />
        <Button className="font-bold ml-4 px-4 bg-blue" onClick={startQuiz}>
          복습시작하기
        </Button>
      </div>
    </section>
  );
};

export default SetupQuizView;
