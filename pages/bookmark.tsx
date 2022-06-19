import SmallHeader from '@components/common/small-header';
import BookmarkBanner from 'components/bookmark/banner';

const Bookmark = () => {
  // TODO: login auth

  return (
    <main className="w-full h-full">
      <BookmarkBanner />
      <section className="mt-9">
        <SmallHeader content="전체 (23)" src="/assets/icons/pen.png" />
      </section>
      <section className="mt-9">{/* TODO: fetch User Data */}</section>
      <section className="mt-9"></section>
    </main>
  );
};

export default Bookmark;
