import type { NextPage } from 'next';
import Head from 'next/head';
import { MainBanner } from '@components/Banner';
import QuestionCard from '@components/common/question-card';

const Home: NextPage = () => {
  const temp = {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    isBookmark: false,
    tags: ['example1', 'example2', 'example3'],
    title: 'What is Lorem Ipsum?',
    id: 1,
  };
  return (
    <div className="w-full">
      <Head>
        <title>1Hour</title>
        <meta name="description" content="개발자를 위한 기술 면접 사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto">
        <MainBanner />
        <h2 className="font-sans text-xl text-white font-bold mt-10 mb-6">🔥 이런 문제들이 있어요!</h2>
        <div className="flex flex-col gap-7 mb-40">
          <QuestionCard {...temp} />
          <QuestionCard {...temp} />
          <QuestionCard {...temp} />
        </div>
      </div>
    </div>
  );
};

export default Home;
