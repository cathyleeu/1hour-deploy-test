import type { NextPage } from 'next';
import Head from 'next/head';

import { QuizPhase } from '@components/Quiz'
import QuizProvier from '@components/Quiz/QuizContext';


const DevQuiz: NextPage = () => {
  return (
    <>
      <Head>
        <title>1Hour - Dev Quiz</title>
      </Head>
      <QuizProvier>
        <QuizPhase />
      </QuizProvier>
    </>
  );
};

export default DevQuiz;
