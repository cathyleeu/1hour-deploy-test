import QuestionCard from '@components/common/question-card';
import SmallHeader from '@components/common/small-header';
import BookmarkBanner from 'components/bookmark/banner';
import { useLogin } from 'lib/hooks';
import questions from '../dummy/questions.json';

const Bookmark = () => {
  // TODO: login auth
  const { user } = useLogin();
  const filteredQuestions = questions.filter((question) => question.isBookmark);

  return (
    <main className="w-full h-full">
      <BookmarkBanner />
      <section className="mt-9">
        <SmallHeader content={`전체 (${filteredQuestions.length})`} src="/assets/icons/pen.png" />
      </section>
      <div className="flex flex-col gap-7 mb-40">
        {filteredQuestions.map((data, id) => (
          <QuestionCard key={id} {...data} />
        ))}
      </div>
    </main>
  );
};

export default Bookmark;
