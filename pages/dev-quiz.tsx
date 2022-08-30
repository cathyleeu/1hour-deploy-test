import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Head from 'next/head';
import { responseAPI, oneHourUrl } from 'lib/api'
import { QuizPhase } from '@components/Quiz'
import QuizProvier from '@components/Quiz/QuizContext';

interface Props {
  tags: Tag[]
}
const DevQuiz: NextPage<Props> = ({tags}) => {
  return (
    <>
      <Head>
        <title>1Hour - Dev Quiz</title>
      </Head>
      <QuizProvier>
        <QuizPhase tags={tags}/>
      </QuizProvier>
    </>
  );
};

export default DevQuiz;


export const getStaticProps: GetStaticProps = async (context) => {
  const [tags] = await responseAPI(oneHourUrl.GET_TAGS)
  return {
    props : {
      tags
    }
  }
}