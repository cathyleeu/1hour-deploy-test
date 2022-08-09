import { useState, useEffect } from 'react';
import { useInput } from 'lib/hooks';
import withAuth, { withAuthProps } from 'lib/hooks/withAuth';

import Modal from '@components/common/modal';
import Button from '@components/common/button';
import { QuestionCard, AnswerCard, QuizTimer } from '@components/Quiz';
import { useQuiz, QuestionType } from '@components/Quiz/QuizContext';
import QuizHeader from './QuizHeader';


const QuizStageView = ({ auth }: withAuthProps) => {
  const { currentStage, goNextStage, timer, errorMessage, setError, questions, updataAnswer, updatePhase, expired, totalStage } =
    useQuiz();

  const answer = useInput('');
  const [expiredMessage, setExpiredMessage] = useState('시간 안에 풀지 못했네요. 다음문제로 넘어갑니다.');
  const [isOpen, setIsOpen] = useState(false);
  const [quiz, setQuiz] = useState<QuestionType>();

  const handleNextStage = async () => {
    const isAvailable = (answer.attrs.value as string).length > 10;

    if (!isAvailable && expired) {
      // 끝내지 못하고 넘어가는 상황
      setExpiredMessage('시간 안에 풀지 못했네요. 다음문제로 넘어갑니다.');
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
        setExpiredMessage('');
        updataAnswer({
          id: quiz!.id,
          content: answer.attrs.value as string,
        });
        goNextStage();
      }, 3000);
      return;
    }

    if (!isAvailable) {
      // 글자수가 미흡한 상황
      setError('최소 10자 이상 입력해주세요.');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    // TODO : add post api
    updataAnswer({
      id: quiz!.id,
      content: answer.attrs.value as string,
    });

    // 단계가 끝났을 때
    if (currentStage + 1 > totalStage) {
      updatePhase('FINISHED');
      return;
    }

    goNextStage();
    return;
  };
  const handleErrorModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setQuiz(questions[currentStage]);
  }, []);

  useEffect(() => {
    if (expired) {
      handleNextStage();
      return;
    }
  }, [expired]);

  useEffect(() => {
    answer.setValue('');
    if (currentStage + 1 <= totalStage) {
      setQuiz(questions[currentStage]);
    }
  }, [currentStage]);

  return (
    <section className="py-4">
      <QuizHeader>
        <QuizHeader.Content>
          <span className="text-blue">{auth.displayName ?? '#UserName'}</span>을 위해 문제를 랜덤으로 총 {totalStage}개를
          준비했어요.
          <br />
          문제를 풀며 자가진단을 해보세요!
        </QuizHeader.Content>
        <QuizHeader.Side>
          <QuizTimer timer={timer} currentStage={currentStage} />
        </QuizHeader.Side>
      </QuizHeader>

      <div className="flex flex-col gap-4 relative">
        <QuestionCard maxStage={totalStage} stage={currentStage} question={quiz?.question} />
        {errorMessage ? (
          <span className="text-error text-base absolute right-0 -bottom-8 text-right">{errorMessage}</span>
        ) : null}
        <AnswerCard {...answer.attrs} error={errorMessage} />
        <Button className="bg-blue font-bold p-4 px-6 self-end" onClick={handleNextStage}>
          다음 문제
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={handleErrorModal}>
        <p className="text-center text-white my-8 whitespace-pre-wrap break-words font-bold text-xl">
          {expiredMessage}
        </p>
      </Modal>
    </section>
  );
};

export default withAuth(QuizStageView);
