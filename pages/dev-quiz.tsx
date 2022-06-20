import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '@components/Layout';
import QuizProvier from '@components/Quiz/QuizContext';
import QuizPhase from '@components/Quiz/QuizPhase';


const DevQuiz: NextPage = () => {
  return (
    <QuizProvier>
      <Container>
        <Head>
          <title>1Hour - Dev Quiz</title>
        </Head>
        <QuizPhase />
      </Container>
    </QuizProvier>
  );
};

export default DevQuiz;
