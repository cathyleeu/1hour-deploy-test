import { useState, useEffect } from 'react';
import useInput from 'utils/hooks/useInput';
import useCountdown from 'utils/hooks/useCountdown';

import { RandomQuizList, generateRandom } from 'lib/utils';

import Modal from '@components/common/modal';
import Button from '@components/common/button';
import { QuestionCard, AnswerCard, QuizTimer } from '@components/Quiz';

const QUIZ_NUM = 10;

const random = generateRandom(RandomQuizList.length, QUIZ_NUM);

const QuizStageView = ({
  stage,
  setStage,
  limit
}: {
  stage: number;
  setStage: (stage:number) => void; // TODO 
  limit: number;
}) => {
  const {expired, seconds, minutes, setCountdown, startCountdown, clearCountdown} = useCountdown(limit);
  const answer = useInput('');
  const [error, setError] = useState('');
  const [expiredMessage, setExpiredMessage] = useState('시간 안에 풀지 못했네요. 다음문제로 넘어갑니다.');
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('')

  const handleNextStage = async() => {
    const isAvailable = (answer.attrs.value as string).length > 10;

    if(!isAvailable && expired) {
      // 끝내지 못하고 넘어가는 상황
      setExpiredMessage('시간 안에 풀지 못했네요. 다음문제로 넘어갑니다.')
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
        setExpiredMessage('');
        setStage(stage + 1);
      }, 3000);
      return;
    }

    if(!isAvailable) {
      // 글자수가 미흡한 상황
      setError('최소 10자 이상 입력해주세요.');
      setTimeout(() => {
        setError('')
      }, 3000)
      return;
    }

    // TODO : add post api 


    // 단계가 끝났을 때 
    if(stage > QUIZ_NUM) {
      clearCountdown();
    }
    
    setStage(stage + 1);
    return;
  }
  const handleErrorModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    // random[stage - 1]
    setQuestion(RandomQuizList[random[stage -1] - 1]?.question);
    setCountdown(limit * 60 * 1000);
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
    if(stage <= QUIZ_NUM) {
      setQuestion(RandomQuizList[random[stage -1] - 1]?.question);
      startCountdown(limit * 60 * 1000);
    }
  }, [stage])
  
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
          stage={stage} 
          question={question}
        />
        <AnswerCard {...answer.attrs} error={error} />
        {error ? <span className='text-error text-base absolute right-0 -bottom-8 text-right'>{ error }</span> : null }
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