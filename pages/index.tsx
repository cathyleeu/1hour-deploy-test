import type { NextPage } from 'next';
import Head from 'next/head';
import { MainBanner } from '@components/common/banner';
import QuestionCard from '@components/common/question-card';
import questions from '../dummy/questions.json';

const Home: NextPage = () => {
  return (
    <div className="w-full">
      {/* <button onClick={handleClick}>data</button> */}
      <Head>
        <title>1Hour</title>
        <meta name="description" content="개발자를 위한 기술 면접 사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto">
        <MainBanner />
        <h2 className="font-sans text-xl text-white font-bold mt-10 mb-6">🔥 이런 문제들이 있어요!</h2>
        <div className="flex flex-col gap-7 mb-40">
          {questions.map((data, id) => (
            <QuestionCard key={id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
