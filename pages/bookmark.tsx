import QuestionCard from '@components/common/question-card';
import SmallHeader from '@components/common/small-header';
import BookmarkBanner from 'components/bookmark/banner';
import { GetServerSideProps } from 'next';
import questions from '../dummy/questions.json';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { UserSession } from 'next-auth';

const Bookmark = ({ user }: { user: UserSession }) => {
  const filteredQuestions = questions.filter((question) => question.isBookmark);

  return (
    <main className="w-full h-full">
      <BookmarkBanner name={user.user.name} />
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
  const user = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!user) {
    return {
      redirect: {
        destination: '/need-login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};
