import QuestionCard from '@components/common/question-card';
import SmallHeader from '@components/common/small-header';
import BookmarkBanner from 'components/bookmark/banner';
import { GetServerSideProps } from 'next';
import questions from '../dummy/questions.json';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { UserSession } from 'next-auth';
import { useAuth } from '@components/auth/AuthProvide';

const Bookmark = () => {
  const { user } = useAuth();
  const filteredQuestions = questions.filter((question) => question.isBookmark);

  return (
    <main className="w-full h-full">
      <BookmarkBanner name={user?.displayName ?? ''} />
      <section className="mt-9">
        <SmallHeader content={`전체 (${filteredQuestions.length})`} src="/assets/icons/pen.png" />
      </section>
      <div className="flex flex-col gap-7 mb-40">
        {/* TODO: fetch question data of user */}
        {filteredQuestions.map((data, id) => (
          <QuestionCard key={id} {...data} />
        ))}
      </div>
    </main>
  );
};

export default Bookmark;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.req.cookies)

  if (!true) {
    return {
      redirect: {
        destination: '/need-login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      
    },
  };
};
