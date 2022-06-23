import { useState, useEffect } from 'react';
import useInput from 'utils/hooks/useInput';
import useCountdown from 'utils/hooks/useCountdown';

import { RandomQuizList, generateRandom } from 'lib/utils';

import Modal from '@components/common/modal';
import Button from '@components/common/button';
import { QuestionCard, AnswerCard, QuizTimer } from '@components/Quiz';
import {useQuiz, QuestionType} from '@components/Quiz/QuizContext';

const QUIZ_NUM = 10;


const QuizStageView = () => {
  const {currentStage, goNextStage, timer, errorMessage, setError, questions, updataAnswer, updatePhase } = useQuiz();
  const {expired, seconds, minutes, setCountdown, startCountdown, clearCountdown} = useCountdown(timer);
  
  const answer = useInput('');
  const [expiredMessage, setExpiredMessage] = useState('시간 안에 풀지 못했네요. 다음문제로 넘어갑니다.');
  const [isOpen, setIsOpen] = useState(false);
  const [quiz, setQuiz] = useState<QuestionType>();

  const handleNextStage = async() => {
    const isAvailable = (answer.attrs.value as string).length > 10;

    if(!isAvailable && expired) {
      // 끝내지 못하고 넘어가는 상황
      setExpiredMessage('시간 안에 풀지 못했네요. 다음문제로 넘어갑니다.')
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
        setExpiredMessage('');
        updataAnswer!({
          id: quiz!.id,
          content: answer.attrs.value as string
        })
        goNextStage!();
      }, 3000);
      return;
    }

    if(!isAvailable) {
      // 글자수가 미흡한 상황
      setError!('최소 10자 이상 입력해주세요.');
      setTimeout(() => {
        setError!('')
      }, 3000)
      return;
    }

    // TODO : add post api 
    updataAnswer!({
      id: quiz!.id,
      content: answer.attrs.value as string
    })

    // 단계가 끝났을 때 
    if(currentStage + 1 > QUIZ_NUM) {
      console.log(currentStage, '????');
      
      clearCountdown();
      updatePhase!('FINISHED');
    }
    
    goNextStage!();
    return;
  }
  const handleErrorModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    setQuiz(questions[currentStage]);
    setCountdown(timer * 60 * 1000);
  }, [])

  useEffect(() => {
    if(expired) {
      handleNextStage();
      return;
    }
  }, [expired])

  useEffect(() => {
    answer.setValue('');
    clearCountdown();
    if(currentStage +1 <= QUIZ_NUM) {
      setQuiz(questions[currentStage]);
      startCountdown(timer * 60 * 1000);
    }
  }, [currentStage])
  
  return (
    <section>
      <div className='flex justify-between items-center mb-10'>
        <p className='text-2xl font-bold'>
          <span className='text-blue'>#UserName</span>을 위해 문제를 랜덤으로 총 10개를 준비했어요.<br/>
          문제를 풀며 자가진단을 해보세요!
        </p>
        <QuizTimer seconds={seconds} minutes={minutes} />
      </div>
      <div className='flex flex-col gap-4 relative'>
        <QuestionCard
          maxStage={QUIZ_NUM} 
          stage={currentStage + 1} 
          question={quiz?.question}
        />
        <AnswerCard {...answer.attrs} error={errorMessage} />
        {errorMessage ? <span className='text-error text-base absolute right-0 -bottom-8 text-right'>{ errorMessage }</span> : null }
        <Button
          className='font-bold p-4 px-6 self-end'
          onClick={handleNextStage}
        >다음 문제</Button>
      </div>
      <Modal isOpen={isOpen} onClose={handleErrorModal}>
        <p className="text-center text-white my-8 whitespace-pre-wrap break-words font-bold text-xl">
          {expiredMessage}
        </p>
      </Modal>
    </section>
  )
}

export default QuizStageView;