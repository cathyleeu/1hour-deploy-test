import type { NextPage } from 'next';
import Head from 'next/head';
import { MainBanner } from '@components/common/banner';
import QuestionCard from '@components/common/question-card';
import { getCategory, getTags } from './api/oneHourAPI';
import questions from '../dummy/questions.json';

const Home: NextPage = () => {
  // const postData = {
  //   title: '모르겟ㅇ어요ㅠㅠㅠ',
  //   content: '이거 어떻게 해요 이거 어떻게 해요 이거 어떻게 해요 이거 어떻게 해요',
  //   category_id: 2,
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'javascript',
  //     },
  //     {
  //       id: 2,
  //       name: 'nestjs',
  //     },
  //   ],
  // };
  // const userId = '123';

  // const category = getCategory(1);
  // const tags = getTags(1);
  // const handleClick = () => {
  //   postQnA(postData, userId);
  // };

  // console.log('Category: ', category);
  // console.log('tags: ', tags);

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
