import { verifyIdToken } from '@/firebase/admin'
import QuestionCard from '@components/common/question-card';
import SmallHeader from '@components/common/small-header';
import BookmarkBanner from 'components/bookmark/banner';
import { GetServerSideProps, NextPage } from 'next';
import { useAuth } from '@components/auth/AuthProvide';
import nookies from 'nookies'
import { responseAPI, oneHourUrl } from 'lib/api'

interface Props {
  questions: QuestionValue[];
}

const Bookmark: NextPage<Props> = ({questions}) => {
  const { user } = useAuth();
  return (
    <main className="w-full h-full">
      <BookmarkBanner name={user?.displayName ?? ''} />
      <section className="mt-9">
        <SmallHeader content={`전체 (${questions.length})`} src="/assets/icons/pen.png" />
      </section>
      <div className="flex flex-col gap-7 mb-40">
        {questions.map((data, id) => (
          <QuestionCard key={data.id} {...data} />
        ))}
      </div>
    </main>
  );
};

export default Bookmark;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const token = await verifyIdToken(cookies.token);
  const { uid } = context.query;
  
  if (!token) {
    return {
      redirect: {
        destination: '/need-login',
        permanent: false,
      },
    };
  }
  
  const [bookmarks] = await responseAPI(oneHourUrl.GET_USER_BOOKMARKS(uid as string))
  const { ids, questions } = bookmarks

  return {
    props: {
      ids: ids ?? [], 
      questions: questions ?? [] 
    },
  };
};
