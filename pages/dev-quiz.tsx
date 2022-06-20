import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Container } from '@components/Layout';
import { QuizStageView, SetupQuizView, QuizResultView } from '@components/Quiz';

const MIN_MINUTES = 1;
const QUIZ_NUM = 10;

const DevQuiz: NextPage = () => {
  const [stage, setStage] = useState(0);
  const [phase, setPhase] = useState('setup') // quiz, finished
  const [limit, setLimit] = useState<number>(MIN_MINUTES);
  useEffect(() => {
    if(0 < stage) {
      setPhase('quiz');
    }
    if(stage > QUIZ_NUM) {
      setPhase('finished');
    }
  }, [stage])
  return (
    <Container>
      <Head>
        <title>1Hour - Dev Quiz</title>
      </Head>
      {phase === 'setup' && <SetupQuizView stage={stage} setStage={setStage} setLimit={setLimit} />}
      {phase === 'quiz' && <QuizStageView stage={stage} setStage={setStage} limit={limit}/> }
      {/* TODO: 초기화 */}
      {phase === 'finished' && <QuizResultView /> }
    </Container>
  );
};

export default DevQuiz;
