import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { MainBanner } from '@components/common/banner';
import QuestionCard from '@components/common/question-card';
import { responseAPI, oneHourUrl } from 'lib/api'

interface Props {
  questions: QuestionValue[];
}
const Home: NextPage<Props> = ({questions}) => {
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
          {questions.map((data) => (
            <QuestionCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const [questions, questionError] = await responseAPI(oneHourUrl.GET_QNAS)
  if(!questions || questionError) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      questions
    },
  };
};
