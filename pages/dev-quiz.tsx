import type { NextPage } from 'next';
import Head from 'next/head';
import { Input, TextArea } from '@components/Form';

const DevQuiz: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>1Hour - Dev Quiz</title>
      </Head>
      연습문제페이지
      <div>
        <Input aria-label="Demo input" placeholder="type something" className="rounded-large w-3/5" />
        <TextArea aria-label="Demo input" placeholder="type something" className="rounded-large w-3/5" />
      </div>
      {/* TODO: DevQuiz */}
    </div>
  );
};

export default DevQuiz;
